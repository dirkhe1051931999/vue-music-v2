// 听歌足迹 - 本周/本月收听时长
// /listen/data/realtime/report
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {
      type: query.type || 'week', //周 week 月 month
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/content/activity/listen/data/realtime/report',
    }
  );
};