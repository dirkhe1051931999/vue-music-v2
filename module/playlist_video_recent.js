// 最近播放的视频
// /playlist/video/recent
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/playlist/video/recent',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};