// 歌单收藏者
// /playlist/subscribers?id=544215255&limit=30
module.exports = (query, request) => {
  const data = {
    id: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', `https://music.163.com/weapi/playlist/subscribers`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};