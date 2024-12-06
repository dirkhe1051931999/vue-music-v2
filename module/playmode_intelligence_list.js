// 智能播放
// /playmode/intelligence/list?id=33894312&pid=24381616
module.exports = (query, request) => {
  const data = {
    songId: query.id,
    type: 'fromPlayOne',
    playlistId: query.pid,
    startMusicId: query.sid || query.id,
    count: query.count || 1,
  };
  return request('POST', `https://music.163.com/weapi/playmode/intelligence/list`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};