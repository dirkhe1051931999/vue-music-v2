// 最新专辑
// /album/newest
module.exports = (query, request) => {
  return request(
    'POST',
    ``,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/weapi/discovery/newAlbum',
    }
  );
};