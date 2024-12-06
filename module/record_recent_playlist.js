// 最近播放-歌单
// /record/recent/playlist
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', `https://music.163.com/api/play-record/playlist/list`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};