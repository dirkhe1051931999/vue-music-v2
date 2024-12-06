// 获取专辑歌曲的音质
// /album/privilege?id=168223858
module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    url: '/api/album/privilege',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};