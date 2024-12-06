// 歌手动态信息
// /artist/detail/dynamic?id=6452

module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/artist/detail/dynamic',
  });
};