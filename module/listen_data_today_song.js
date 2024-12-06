// 听歌足迹 - 今日收听
// /listen/data/today/song
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/content/activity/listen/data/today/song/play/rank',
    }
  );
};