// 账号云豆数
// /musician/cloudbean
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/cloudbean/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};