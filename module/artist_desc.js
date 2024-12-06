// 歌手介绍
// /artist/desc?id=6452
module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/artist/introduction',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/artist/introduction',
  });
};