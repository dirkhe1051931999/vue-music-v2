// 相似歌手
// /simi/artist?id=6452
module.exports = (query, request) => {
  const data = {
    artistid: query.id,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/discovery/simiArtist',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};