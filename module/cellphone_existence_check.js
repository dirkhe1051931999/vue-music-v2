// 检测手机号码是否已注册
// /cellphone/existence/check?phone=15829343347
module.exports = (query, request) => {
  const data = {
    cellphone: query.phone,
    countrycode: query.countrycode,
  };
  return request('POST', `https://music.163.com/api/cellphone/existence/check`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};