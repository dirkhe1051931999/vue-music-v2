// 用户设置
// /setting
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/user/setting',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};