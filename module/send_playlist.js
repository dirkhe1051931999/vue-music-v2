// 私信歌单
// /send/playlist?msg=test&user_ids=475625142&playlist=705123491
module.exports = (query, request) => {
  const data = {
    id: query.playlist,
    type: 'playlist',
    msg: query.msg,
    userIds: '[' + query.user_ids + ']',
  };
  return request('POST', `https://music.163.com/weapi/msg/private/send`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};