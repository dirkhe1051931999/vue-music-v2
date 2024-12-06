// 数字专辑销量
// /digitalAlbum/sales?ids=120605500
module.exports = (query, request) => {
  const data = {
    albumIds: query.ids,
  };
  return request('POST', `https://music.163.com/api/vipmall/albumproduct/album/query/sales`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};