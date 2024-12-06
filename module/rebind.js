// 更换手机
// /rebind?phone=xxx&oldcaptcha=1234&captcha=5678
module.exports = (query, request) => {
  const data = {
    captcha: query.captcha,
    phone: query.phone,
    oldcaptcha: query.oldcaptcha,
    ctcode: query.ctcode || '86',
  };
  return request('POST', `https://music.163.com/api/user/replaceCellphone`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};