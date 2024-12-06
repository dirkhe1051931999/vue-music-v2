// dj非热门类型
// /dj/category/excludehot
module.exports = (query, request) => {
  return request(
    'POST',
    ``,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/weapi/djradio/category/excludehot',
    }
  );
};