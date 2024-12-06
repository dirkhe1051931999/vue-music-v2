// 最近播放-视频
// /record/recent/video
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/play-record/newvideo/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};