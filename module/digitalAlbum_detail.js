// 数字专辑详情
// /digitalAlbum/detail?id=120605500
module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', `https://music.163.com/api/vipmall/albumproduct/detail`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};