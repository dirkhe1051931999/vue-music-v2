// 电台24小时主播榜
// /dj/toplist/hours?limit=30
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
    // 不支持 offset
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/dj/toplist/hours',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};