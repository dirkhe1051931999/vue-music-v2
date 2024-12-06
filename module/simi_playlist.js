// 相似歌单
// /simi/playlist?id=347230
module.exports = (query, request) => {
  const data = {
    songid: query.id,
    limit: query.limit || 50,
    offset: query.offset || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/discovery/simiPlaylist',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};