// 播客歌词
// /voice/lyric?id=29730819
module.exports = (query, request) => {
  const data = {
    programId: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/voice/lyric/get',
  });
};