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
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/yunbei/rcmd/song/submit',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};