// 电台新人榜
// /dj/toplist/newcomer?limit=30
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
    offset: query.offset || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/dj/toplist/newcomer',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};