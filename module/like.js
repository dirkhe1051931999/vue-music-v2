// 红心与取消红心歌曲
// /like?id=347230
module.exports = (query, request) => {
  query.like = query.like !== 'false';
  const data = {
    alg: 'itembased',
    trackId: query.id,
    like: query.like,
    time: '3',
  };
  return request('POST', `https://music.163.com/api/radio/like`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};