// 音乐人数据概况
// /musician/data/overview
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/creator/musician/statistic/data/overview/get`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};