// 电台最热主播榜
// /dj/toplist/popular?limit=30
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/dj/toplist/popular',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};