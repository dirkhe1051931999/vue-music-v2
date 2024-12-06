// 最近播放-歌曲
// /record/recent/song
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', `https://music.163.com/api/play-record/song/list`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};