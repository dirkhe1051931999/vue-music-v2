// 电台分类列表
// /dj/catelist
module.exports = (query, request) => {
  return request(
    'POST',
    ``,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/weapi/djradio/category/get',
    }
  );
};