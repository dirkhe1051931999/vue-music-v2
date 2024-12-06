// 邮箱登录
// /login?email=xxx@163.com&password=yyy
const CryptoJS = require('crypto-js');

module.exports = async (query, request) => {
  const data = {
    type: '0',
    https: 'true',
    username: query.email,
    password: query.md5_password || CryptoJS.MD5(query.password).toString(),
    rememberLogin: 'true',
  };
  let result = await request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/w/login',
  });
  if (result.body.code === 502) {
    return {
      status: 200,
      body: {
        msg: '账号或密码错误',
        code: 502,
        message: '账号或密码错误',
      },
    };
  }
  if (result.body.code === 200) {
    result = {
      status: 200,
      body: {
        ...JSON.parse(JSON.stringify(result.body).replace(/avatarImgId_str/g, 'avatarImgIdStr')),
        cookie: result.cookie.join(';'),
      },
      cookie: result.cookie,
    };
  }
  return result;
};