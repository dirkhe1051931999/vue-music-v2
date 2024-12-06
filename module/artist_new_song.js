// 关注歌手新歌
// /artist/new/song?limit=1&before=1602777625000
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    startTimestamp: query.before || Date.now(),
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/sub/artist/new/works/song/list',
  });
};