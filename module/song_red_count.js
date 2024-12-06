// 歌曲红心数量
// /song/red/count?id=33894312
module.exports = (query, request) => {
  const data = {
    songId: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/song/red/count',
  });
};