// 视频详情
// /video/detail?id=89ADDE33C0AAE8EC14B99F6750DB954D
module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/cloudvideo/v1/video/detail',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};