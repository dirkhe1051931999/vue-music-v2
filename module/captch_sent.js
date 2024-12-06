// 发送验证码
// /captch/sent?phone=1
module.exports = (query, request) => {
  const data = {
    ctcode: query.ctcode || '86',
    cellphone: query.phone,
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/sms/captcha/sent',
  });
};