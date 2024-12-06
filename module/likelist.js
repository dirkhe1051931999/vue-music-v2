// 喜欢的歌曲(无序)
// /likelist?uid=32953014
module.exports = (query, request) => {
  const data = {
    uid: query.uid,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/song/like/get',
  });
};