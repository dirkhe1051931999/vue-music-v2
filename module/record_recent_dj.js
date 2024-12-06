// 最近播放-播客
// /record/recent/dj?limit=30
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/play-record/djradio/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};