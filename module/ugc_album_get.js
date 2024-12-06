// 专辑简要百科信息
// /ugc/album/get?id=168223858
module.exports = (query, request) => {
  const data = {
    albumId: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/rep/ugc/album/get',
  });
};