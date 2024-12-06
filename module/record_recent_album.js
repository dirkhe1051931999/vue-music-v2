// 最近播放的专辑
// /record/recent/album
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', `https://music.163.com/api/play-record/album/list`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};