// 注册账号
// /register/cellphone?phone=13xxx&password=xxxxx&captcha=1234&nickname=hejian
const CryptoJS = require('crypto-js');

module.exports = (query, request) => {
  const data = {
    captcha: query.captcha,
    phone: query.phone,
    password: CryptoJS.MD5(query.password).toString(),
    nickname: query.nickname,
    countrycode: query.countrycode || '86',
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/register/cellphone',
  });
};