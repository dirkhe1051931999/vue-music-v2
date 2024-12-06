// 更换手机
// /rebind?phone=xxx&oldcaptcha=1234&captcha=5678
module.exports = (query, request) => {
  const data = {
    captcha: query.captcha,
    phone: query.phone,
    oldcaptcha: query.oldcaptcha,
    ctcode: query.ctcode || '86',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/user/replaceCellphone',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};