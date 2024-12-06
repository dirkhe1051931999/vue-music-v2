const encrypt = require('./crypto');
const request = require('request');
const queryString = require('querystring');
const PacProxyAgent = require('pac-proxy-agent');
const zlib = require('zlib');
const CryptoJS = require('crypto-js');
const { cookieToJson, getURI, cookieJsonToString, toBoolean } = require('./index');
const { CONFIG } = require('../data/config');
const { resolve } = require('path');
const { readFileSync, existsSync } = require('fs');

request.debug = false;

const formatCookie = (cookie, url) => {
  if (typeof cookie === 'string') {
    cookie = cookieToJson(cookie);
  }
  if (typeof cookie === 'object') {
    let _ntes_nuid = CryptoJS.lib.WordArray.random(32).toString();
    let os = CONFIG.osMap[cookie.os] || CONFIG.osMap['iphone'];
    let deviceIdPath = resolve(__dirname, '../', 'deviceid');
    let tokenPath = resolve(__dirname, '../', 'anonymous_token');
    const anonymous_token = existsSync(tokenPath) ? readFileSync(tokenPath, 'utf-8').split('\n')[0] : '';
    let deviceId = existsSync(deviceIdPath) ? readFileSync(deviceIdPath, 'utf-8').split('\n')[0] : '';
    let uri = getURI(url);
    cookie['__remember_me'] = 'true';
    cookie['ntes_kaola_ad'] = '1';
    cookie['_ntes_nuid'] = cookie._ntes_nuid || _ntes_nuid;
    cookie['_ntes_nnid'] = cookie._ntes_nnid || `${_ntes_nuid},${Date.now().toString()}`;
    cookie['WNMCID'] = cookie.WNMCID || CONFIG.WNMCID;
    cookie['WEVNSM'] = cookie.WEVNSM || '1.0.0';
    cookie['osver'] = cookie.osver || os.osver;
    cookie['deviceId'] = cookie.deviceId || deviceId;
    cookie['os'] = cookie.os || os.os;
    cookie['channel'] = cookie.channel || os.channel;
    cookie['appver'] = cookie.appver || os.appver;
    if (uri.indexOf('login') === -1) {
      cookie['NMTID'] = CryptoJS.lib.WordArray.random(16).toString();
    }
    if (!cookie.MUSIC_U) {
      cookie.MUSIC_A = cookie.MUSIC_A || anonymous_token;
    }
    return cookieJsonToString(cookie);
  }
};
// 处理不同的加密方式
const handleCrypto = (options, data, headers, url, method) => {
  switch (options.crypto) {
    case 'weapi': {
      headers['Referer'] = 'https://music.163.com';
      headers['User-Agent'] = options.ua || CONFIG.userAgentMap['weapi']['pc'];
      const csrfToken = (headers['Cookie'] || '').match(/_csrf=([^(;|$)]+)/);
      data.csrf_token = csrfToken ? csrfToken[1] : '';
      return {
        data: encrypt.weapi(data),
        url: 'https://music.163.com/' + options.url.replace(/\w*api/, 'weapi'),
        headers,
      };
    }
    case 'linuxapi': {
      headers['User-Agent'] = options.ua || CONFIG.userAgentMap['linuxapi']['linux'];
      return {
        data: encrypt.linuxapi({
          method: 'POST',
          url: url.replace(/\w*api/, 'api'),
          params: data,
        }),
        url: 'https://music.163.com/api/linux/forward',
        headers,
      };
    }
    case 'eapi': {
      const cookie = options.cookie || {};
      const header = {
        osver: cookie.osver,
        deviceId: cookie.deviceId,
        appver: cookie.appver || '6.1.1',
        versioncode: cookie.versioncode || '140',
        mobilename: cookie.mobilename || '',
        buildver: cookie.buildver || Date.now().toString().substr(0, 10),
        resolution: cookie.resolution || '1920x1080',
        __csrf: cookie['__csrf'] || '',
        os: cookie.os || 'android',
        channel: cookie.channel,
        requestId: `${Date.now()}_${Math.floor(Math.random() * 1000)
          .toString()
          .padStart(4, '0')}`,
      };
      if (cookie.MUSIC_U) header.MUSIC_U = cookie.MUSIC_U;
      if (cookie.MUSIC_A) header.MUSIC_A = cookie.MUSIC_A;
      headers.Cookie = cookieJsonToString(header);
      headers['User-Agent'] = options.ua || CONFIG.userAgentMap['api']['iphone'];
      data.header = header;
      data.e_r = options.e_r !== undefined ? options.e_r : data.e_r !== undefined ? data.e_r : false; // 用于加密接口返回值
      data.e_r = toBoolean(data.e_r);
      return {
        data: encrypt.eapi(options.url, data),
        url: 'https://interface.music.163.com/' + options.url.replace(/\w*api/, 'eapi'),
        headers,
        encoding: null,
      };
    }
    default:
      console.log('[ERR]', 'Unknown Crypto:', crypto);
      return { data, url, headers };
  }
};
// https://interface.music.163.com/eapi/login/qrcode/client/login

const handleSettings = ({ method, url, headers, data, options }) => {
  const settings = {
    method,
    url,
    headers,
    body: queryString.stringify(data),
  };

  // 处理代理
  if (/\.pac$/i.test(options.proxy)) {
    settings.agent = new PacProxyAgent(options.proxy);
  } else {
    settings.proxy = options.proxy;
  }

  return settings;
};

const createRequest = (method, url, data, options) => {
  return new Promise((resolve, reject) => {
    let headers = {
      'Content-Type': method.toUpperCase() === 'POST' ? 'application/x-www-form-urlencoded' : null,
      Cookie: formatCookie(options.cookie || {}, url),
    };
    // 处理加密
    const cryptoResult = handleCrypto(options, data, headers, url, method);
    data = cryptoResult.data;
    url = cryptoResult.url;
    // 处理代理
    const settings = handleSettings({ method, url, headers, data, options });
    if (cryptoResult.encoding !== undefined) {
      settings.encoding = cryptoResult.encoding;
    }
    // 发送请求
    request(settings, (err, res, body) => {
      const response = { status: 500, body: {}, cookie: [] };
      switch (true) {
        // 处理错误情况
        case !!err: {
          response.status = 502;
          response.body = { code: 502, msg: err.stack };
          reject(response);
          break;
        }

        // 处理正常响应
        default: {
          response.cookie = (res.headers['set-cookie'] || []).map((x) => x.replace(/\s*Domain=[^(;|$)]+;*/, ''));
          try {
            switch (options.crypto) {
              // 处理eapi加密方式
              case 'eapi': {
                zlib.unzip(body, function (err, buffer) {
                  const _buffer = err ? body : buffer;
                  try {
                    try {
                      response.body = JSON.parse(encrypt.decrypt(_buffer).toString());
                      response.status = response.body.code || res.statusCode;
                    } catch (e) {
                      response.body = JSON.parse(_buffer.toString());
                      response.status = res.statusCode;
                    }
                    if (response.body.code) {
                      response.body.code = Number(response.body.code);
                    }
                  } catch (e) {
                    response.body = _buffer.toString();
                    response.status = res.statusCode;
                  }
                  response.status = 100 < response.status && response.status < 600 ? response.status : 400;
                  response.status === 200 ? resolve(response) : reject(response);
                });
                return false;
              }

              // 处理其他加密方式
              default: {
                response.body = JSON.parse(body);
                response.status = response.body.code || res.statusCode;
                if ([201, 302, 400, 502, 800, 801, 802, 803].includes(response.body.code)) {
                  response.status = response.body.code;
                }
                break;
              }
            }
          } catch (e) {
            response.body = body;
            response.status = res.statusCode;
          }

          if (response.status === 200) {
            resolve(response);
          } else if (response.status <= 100 || response.status >= 600) {
            response.status = 400;
            reject(response);
          } else {
            reject(response);
          }
        }
      }
    });
  });
};

module.exports = createRequest;