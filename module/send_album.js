// 私信专辑
// /send/album?user_ids=1&id=351318&msg=测试
module.exports = (query, request) => {
  const data = {
    id: query.id,
    msg: query.msg || '',
    type: 'album',
    userIds: '[' + query.user_ids + ']',
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/msg/private/send',
  });
};