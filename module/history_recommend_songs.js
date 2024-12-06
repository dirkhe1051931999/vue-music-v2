// 历史每日推荐歌曲
// /history/recommend/songs
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/discovery/recommend/songs/history/recent',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};