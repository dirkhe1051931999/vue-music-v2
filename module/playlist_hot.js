// 热门歌单分类
// /playlist/hot
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: '/weapi/playlist/hottags',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};