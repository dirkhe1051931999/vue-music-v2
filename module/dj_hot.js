// 热门电台
// /dj/hot
module.exports = (query, request) => {
  const data = {
    cat: query.type,
    cateId: query.type,
    type: query.type,
    categoryId: query.type,
    category: query.type,
    limit: query.limit,
    offset: query.offset,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/djradio/hot/v1',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};