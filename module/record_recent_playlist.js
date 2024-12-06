// 最近播放-歌单
// /record/recent/playlist
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/play-record/playlist/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};