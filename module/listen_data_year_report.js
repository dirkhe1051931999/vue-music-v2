// 听歌足迹 - 年度听歌足迹
// /listen/data/year/report
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/content/activity/listen/data/year/report',
    }
  );
};