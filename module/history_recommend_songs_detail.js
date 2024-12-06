// 历史每日推荐歌曲详情
// /history/recommend/songs/detail
module.exports = (query, request) => {
  const data = {
    date: query.date || '',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/discovery/recommend/songs/history/detail',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};