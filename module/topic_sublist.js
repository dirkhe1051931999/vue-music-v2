// 收藏的专栏
// /topic/sublist
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 50,
    offset: query.offset || 0,
    total: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/topic/sublist',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};