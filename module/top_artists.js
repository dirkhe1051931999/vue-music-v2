// 热门歌手
// /top/artists?offset=0&limit=30
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 50,
    offset: query.offset || 0,
    total: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/artist/top',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};