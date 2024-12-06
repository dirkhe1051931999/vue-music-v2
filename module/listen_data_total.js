// 听歌足迹 - 总收听时长
// /listen/data/total
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/content/activity/listen/data/total',
    }
  );
};