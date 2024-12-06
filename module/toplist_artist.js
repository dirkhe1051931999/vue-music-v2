// 歌手榜
// /toplist/artist
module.exports = (query, request) => {
  const data = {
    type: 1,
    limit: 100,
    offset: 0,
    total: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/toplist/artist',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};