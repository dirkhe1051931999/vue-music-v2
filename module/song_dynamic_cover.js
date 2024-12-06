// 歌曲动态封面
// /song/dynamic/cover?id=2155423468
module.exports = (query, request) => {
  const data = {
    songId: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/songplay/dynamic-cover',
  });
};