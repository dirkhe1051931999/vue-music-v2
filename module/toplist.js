// 所有榜单介绍
// /toplist
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/api/toplist`,
    {},
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/toplist',
    }
  );
};