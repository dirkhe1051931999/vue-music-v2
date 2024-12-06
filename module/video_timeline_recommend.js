// 推荐视频
// /video/timeline/recommend
module.exports = (query, request) => {
  const data = {
    offset: query.offset || 0,
    filterLives: '[]',
    withProgramInfo: 'true',
    needUrl: '1',
    resolution: '480',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/videotimeline/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};