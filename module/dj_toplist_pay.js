// 付费精品
// /dj/toplist/pay?limit=30
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
    // 不支持 offset
  };
  return request('POST', `https://music.163.com/api/djradio/toplist/pay`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};