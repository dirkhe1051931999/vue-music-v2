const express = require('express');
const bodyParser = require('body-parser');
const request = require('./util/request');
const { middleware: cache } = require('apicache');
let modules = require('./modules');
const fs = require('fs');
const path = require('path');
const { generateRandomChineseIP, cookieToJson, getRandomFromList, reverseObject } = require('./util');
const { CONFIG } = require('./data/config');
const deviceidText = fs.readFileSync(path.resolve(__dirname, './data/deviceidlist.txt'), 'utf-8');
const deviceidList = deviceidText.split('\n');

// 中间件
const corsMiddleware = (req, res, next) => {
  if (req.path !== '/' && !req.path.includes('.')) {
    res.header({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8',
    });
  }
  next();
};

const cookieParser = (req, res, next) => {
  req.cookies = {};
  const cookieHeader = req.headers.cookie || '';
  cookieHeader.split(/\s*;\s*/).forEach((pair) => {
    const [key, value] = pair.split('=').map((part) => decodeURIComponent(part.trim()));
    if (key && value) {
      req.cookies[key] = value;
    }
  });
  next();
};

// 路由处理
const handleRoute = (route, handler) => {
  return async (req, res) => {
    try {
      const query = { ...req.query, ...req.body, cookie: req.cookies };
      const answer = await handler(query, request);
      res.append('Set-Cookie', answer.cookie);
      res.status(answer.status).send(answer.body);
    } catch (answer) {
      console.log('[ERR]', decodeURIComponent(req.originalUrl));
      if (answer.body.code === '301') {
        answer.body.msg = '需要登录';
      }
      res.append('Set-Cookie', answer.cookie);
      res.status(answer.status).send(answer.body);
    }
  };
};

// 生成配置
function generateConfig() {
  global.cnIp = generateRandomChineseIP();
  const tokenPath = path.resolve(__dirname, 'anonymous_token');
  const deviceIdPath = path.resolve(__dirname, 'deviceid');
  const tokenExists = fs.existsSync(tokenPath);
  const deviceIdExists = fs.existsSync(deviceIdPath);
  if (!tokenExists && !deviceIdExists) {
    const deviceId = getRandomFromList(deviceidList);
    fs.writeFileSync(deviceIdPath, deviceId, 'utf-8');
    request('get', `http://localhost:${CONFIG.port}/register/anonimous`, {}, {})
      .then((res) => {
        const cookie = res.body.cookie;
        if (cookie) {
          const { MUSIC_A } = cookieToJson(cookie);
          fs.writeFileSync(tokenPath, MUSIC_A, 'utf-8');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// 应用设置
const app = express();

// 中间件配置
app.use(corsMiddleware);
app.use(cookieParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cache(CONFIG.cacheTime, (req, res) => res.statusCode === 200));

// 路由配置
try {
  // modules 是一个对象，把对象reverse下
  modules = reverseObject(modules); //防止贪婪匹配
  Object.entries(modules).forEach(([file, handler]) => {
    const route = CONFIG.specialRoutes[file] || '/' + file.replace(/\.js$/i, '').replace(/_/g, '/');
    app.use(route, handleRoute(route, handler));
  });
  generateConfig();
} catch (e) {
  console.error('路由配置出错', e);
}

// 启动服务器
app.server = app.listen(CONFIG.port, () => {
  console.log(`server running @ http://localhost:${CONFIG.port}`);
});

module.exports = app;