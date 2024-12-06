// 歌手相关MV
// /artist/detail/dynamic?id=6452
module.exports = (query, request) => {
  const data = {
    artistId: query.id,
    limit: query.limit,
    offset: query.offset,
    total: true,
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/artist/mvs',
  });
};