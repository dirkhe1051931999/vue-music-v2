// 所有榜单内容摘要
// /toplist/detail
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: '/weapi/toplist/detail',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};