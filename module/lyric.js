// 歌词
// /lyric?id=33894312
module.exports = (query, request) => {
  const data = {
    id: query.id,
    tv: -1,
    lv: -1,
    rv: -1,
    kv: -1,
    _nmclfl: 1,
  };
  return request('POST', `https://music.163.com/weapi/song/lyric`, data, { crypto: 'linuxapi', cookie: query.cookie, proxy: query.proxy });
};