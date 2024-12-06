// 数字专辑销量
// /digitalAlbum/sales?ids=120605500
module.exports = (query, request) => {
  const data = {
    albumIds: query.ids,
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/vipmall/albumproduct/album/query/sales',
  });
};