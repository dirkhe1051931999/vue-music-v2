// 最近播放-歌曲
// /record/recent/song
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/play-record/song/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};