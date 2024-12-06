// 私信歌曲
// /send/song?user_ids=1&id=351318&msg=测试
module.exports = (query, request) => {
  const data = {
    id: query.id,
    msg: query.msg || '',
    type: 'song',
    userIds: '[' + query.user_ids + ']',
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/msg/private/send',
  });
};