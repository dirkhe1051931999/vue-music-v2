// 视频标签列表
// /video/group/list
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/cloudvideo/group/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};