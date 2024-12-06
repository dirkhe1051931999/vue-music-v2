// 电台banner
// dj/banner
module.exports = (query, request) => {
  const data = {};
  return request(
    'POST',
    ``,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/weapi/djradio/banner/get',
    }
  );
};