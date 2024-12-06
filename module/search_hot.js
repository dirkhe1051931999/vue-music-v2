// 热门搜索
// /search/hot
module.exports = (query, request) => {
  const data = {
    type: 1111,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/search/hot',
  });
};