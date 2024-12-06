// 热搜列表
// /search/hot/detail
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/hotsearchlist/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};