// 相似歌曲
// /simi/song?id=347230
module.exports = (query, request) => {
  const data = {
    songid: query.id,
    limit: query.limit || 50,
    offset: query.offset || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/v1/discovery/simiSong',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};