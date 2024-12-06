// 热搜列表
// /search/hot/detail
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/hotsearchlist/get`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};