// 推荐MV
// /personalized/mv
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: '/weapi/personalized/mv',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};