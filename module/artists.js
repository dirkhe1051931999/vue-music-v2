// 歌手单曲
// /artists?id=6452
module.exports = (query, request) => {
  return request('POST', `https://music.163.com/weapi/v1/artist/${query.id}`, {}, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};