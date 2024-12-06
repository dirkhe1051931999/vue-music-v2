// 精选电台
// dj/recommend
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: '/weapi/djradio/recommend/v1',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};