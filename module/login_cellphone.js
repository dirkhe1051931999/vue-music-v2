// 手机登录
// /login/cellphone?phone=xxx&captcha=1234
const CryptoJS = require('crypto-js');

module.exports = async (query, request) => {
  const data = {
    type: '1',
    https: 'true',
    phone: query.phone,
    countrycode: query.countrycode || '86',
    captcha: query.captcha,
    [query.captcha ? 'captcha' : 'password']: query.captcha ? query.captcha : query.md5_password || CryptoJS.MD5(query.password).toString(),
    rememberLogin: 'true',
  };
  let result = await request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/w/login/cellphone',
  });

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