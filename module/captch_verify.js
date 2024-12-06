// 校验验证码
// /captch/verify?phone=15829050465&captcha=1839
module.exports = (query, request) => {
  const data = {
    ctcode: query.ctcode || '86',
    cellphone: query.phone,
    captcha: query.captcha,
  };
  return request('POST', `https://music.163.com/weapi/sms/captcha/verify`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};