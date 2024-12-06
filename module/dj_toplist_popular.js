// 电台最热主播榜
// /dj/toplist/popular?limit=30
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', `https://music.163.com/api/dj/toplist/popular`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};