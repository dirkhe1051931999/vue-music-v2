// 用户绑定手机
// /user/bindingcellphone?phone=15829050465&captcha=1234
const CryptoJS = require('crypto-js');

module.exports = (query, request) => {
  const data = {
    phone: query.phone,
    countrycode: query.countrycode || '86',
    captcha: query.captcha,
    password: query.password ? CryptoJS.MD5(query.password).toString() : '',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/user/bindingCellphone',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};