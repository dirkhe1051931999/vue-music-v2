// 类别热门电台
// /user/level
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/user/level',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};