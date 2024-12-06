// 全部歌单分类
// /playlist/catlist
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: '/weapi/playlist/catalogue',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};