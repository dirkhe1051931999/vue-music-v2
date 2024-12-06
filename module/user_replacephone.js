// 通过手机号码更换绑定手机
// /user/replacephone?phone=xxx&captcha=123&oldcaptcha123
module.exports = (query, request) => {
  const data = {
    phone: query.phone,
    captcha: query.captcha,
    oldcaptcha: query.oldcaptcha,
    countrycode: query.countrycode || '86',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/user/replaceCellphone',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};