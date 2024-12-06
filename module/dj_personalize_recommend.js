// 电台个性推荐
// /dj/personalize/recommend
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/api/djradio/personalize/rcmd`,
    {
      limit: query.limit || 6,
    },
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};