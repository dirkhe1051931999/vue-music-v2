// 歌曲简要百科信息
// /ugc/song/get?id=167876
module.exports = (query, request) => {
  const data = {
    songId: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/rep/ugc/song/get',
  });
};