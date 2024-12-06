// 每日推荐歌单
// /recommend/resource
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: '/weapi/v1/discovery/recommend/resource',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};