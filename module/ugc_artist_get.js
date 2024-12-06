// 歌手简要百科信息
// /ugc/artist/get?id=32323
module.exports = (query, request) => {
  const data = {
    artistId: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/rep/ugc/artist/get',
  });
};