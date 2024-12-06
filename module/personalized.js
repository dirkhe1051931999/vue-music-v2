// 推荐歌单
// /personalized?limit=30
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 30,
    offset: query.limit || 0,
    total: true,
    n: 1000,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/personalized/playlist',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};