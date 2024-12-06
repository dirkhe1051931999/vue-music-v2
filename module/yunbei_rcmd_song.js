// 云贝推歌
// /yunbei/rcmd/song
module.exports = (query, request) => {
  const data = {
    songId: query.id,
    reason: query.reason || '好歌献给你',
    scene: '',
    fromUserId: -1,
    yunbeiNum: query.yunbeiNum || 10,
  };
  return request('POST', `https://music.163.com/api/yunbei/rcmd/song/submit`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};