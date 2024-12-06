// 副歌时间
// /song/chorus?id=2058263032
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {
      ids: JSON.stringify([query.id]),
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/song/chorus',
    }
  );
};