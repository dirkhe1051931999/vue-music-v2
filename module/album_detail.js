// 数字专辑详情
// /album/detail?id=251406892
module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/vipmall/albumproduct/detail',
  });
};