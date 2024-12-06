// 听歌足迹 - 周/月/年收听报告
// /listen/data/report
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {
      type: query.type || 'week', //周 week 月 month 年 year
      endTime: query.endTime, // 不填就是本周/月的
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/content/activity/listen/data/report',
    }
  );
};