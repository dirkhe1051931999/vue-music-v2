// 最近播放的专辑
// /record/recent/album
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/play-record/album/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};