// 每日推荐歌曲
// /recommend/songs
module.exports = (query, request) => {
  const data = {
    limit: 20,
    offset: 0,
    total: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/v1/discovery/recommend/songs',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};