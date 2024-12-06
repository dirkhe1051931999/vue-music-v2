// 历史每日推荐歌曲
// /history/recommend/songs
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/discovery/recommend/songs/history/recent`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};