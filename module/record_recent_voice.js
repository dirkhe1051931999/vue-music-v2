// 最近播放-声音
// /record/recent/voice
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/play-record/voice/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};