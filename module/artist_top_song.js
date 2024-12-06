// 歌手热门 50 首歌曲
// /artist/top/song?id=6252
module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/artist/top/song',
  });
};