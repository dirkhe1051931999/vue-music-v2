// 回忆坐标
// /music/first/listen/info
module.exports = (query, request) => {
  const data = {
    songId: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/content/activity/music/first/listen/info',
  });
};