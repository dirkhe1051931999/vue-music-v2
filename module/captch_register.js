// 注册账号
// /captch/register?captcha=1234&phone=13xxxxxxxxx&password=xxxxxx&nickname=xxxx
const crypto = require('crypto');

module.exports = (query, request) => {
  const data = {
    captcha: query.captcha,
    phone: query.phone,
    password: crypto.createHash('md5').update(query.password).digest('hex'),
    nickname: query.nickname,
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/register/cellphone',
  });
};