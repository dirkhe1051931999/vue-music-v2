// 默认搜索关键词
// /search/default
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/search/defaultkeyword/get',
    }
  );
};