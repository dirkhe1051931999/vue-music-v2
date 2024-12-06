// 音乐人歌曲播放趋势
// /musician/play/trend?startTime=2021-05-24&endTime=2021-05-30
module.exports = (query, request) => {
  const data = {
    startTime: query.startTime,
    endTime: query.endTime,
  };
  return request('POST', `https://music.163.com/api/creator/musician/play/count/statistic/data/trend/get`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};