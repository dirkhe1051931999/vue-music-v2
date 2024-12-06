// 专辑内容
// /album?id=251406892
module.exports = (query, request) => {
  return request(
    'POST',
    ``,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: `/api/v1/album/${query.id}`,
    }
  );
};