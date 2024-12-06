// 付费精品
// /dj/toplist/pay?limit=30
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
    // 不支持 offset
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/djradio/toplist/pay',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};