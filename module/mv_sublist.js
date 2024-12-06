// 已收藏MV列表
// /mv/sublist
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 25,
    offset: query.offset || 0,
    total: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/cloudvideo/allvideo/sublist',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};