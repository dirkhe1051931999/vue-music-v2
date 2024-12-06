// 最近播放-播客
// /record/recent/dj?limit=30
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', `https://music.163.com/api/play-record/djradio/list`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};