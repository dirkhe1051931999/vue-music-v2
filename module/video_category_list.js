// 视频分类列表
// /video/category/list
module.exports = (query, request) => {
  const data = {
    offset: query.offset || 0,
    total: 'true',
    limit: query.limit || 99,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/cloudvideo/category/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};