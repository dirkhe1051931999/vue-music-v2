// dj推荐类型
// /dj/category/recommend
module.exports = (query, request) => {
  return request(
    'POST',
    ``,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/weapi/djradio/home/category/recommend',
    }
  );
};