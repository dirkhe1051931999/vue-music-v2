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
  return request('POST', `https://music.163.com/api/user/bindingCellphone`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};