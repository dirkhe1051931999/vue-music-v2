// 最近播放-视频
// /record/recent/video
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  };
  return request('POST', `https://music.163.com/api/play-record/newvideo/list`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};