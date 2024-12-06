// 云盘歌曲信息匹配纠正
// /cloud/match?uid=32953014&sid=bbb&asid=0
module.exports = (query, request) => {
  const data = {
    userId: query.uid,
    songId: query.sid,
    adjustSongId: query.asid,
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/cloud/user/song/match',
  });
};