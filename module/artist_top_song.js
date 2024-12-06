// 歌手热门 50 首歌曲
// /artist/top/song?id=6252
module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', `https://music.163.com/weapi/artist/top/song`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};