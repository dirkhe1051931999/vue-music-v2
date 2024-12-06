// 歌曲是否喜爱
// /song/like/check?ids=[2058263032,1497529942]
module.exports = (query, request) => {
  const data = {
    trackIds: query.ids,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/song/like/check',
  });
};