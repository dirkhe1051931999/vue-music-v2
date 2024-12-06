// 获取歌手详情
// /artist/detail?id=6452
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {
      id: query.id,
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/artist/head/info/get',
    }
  );
};