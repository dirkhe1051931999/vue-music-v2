// 通过手机号码更换绑定手机
// /user/replacephone?phone=xxx&captcha=123&oldcaptcha123
module.exports = (query, request) => {
  const data = {
    phone: query.phone,
    captcha: query.captcha,
    oldcaptcha: query.oldcaptcha,
    countrycode: query.countrycode || '86',
  };
  return request('POST', `https://music.163.com/api/user/replaceCellphone`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};