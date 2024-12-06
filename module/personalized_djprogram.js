// 推荐电台
// /personalized/djprogram
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: '/weapi/personalized/djprogram',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};