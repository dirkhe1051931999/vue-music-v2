// 推荐节目
// /program/recommend?limit=5
module.exports = (query, request) => {
  const data = {
    cateId: query.type,
    limit: query.limit || 10,
    offset: query.offset || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/program/recommend/v1',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};