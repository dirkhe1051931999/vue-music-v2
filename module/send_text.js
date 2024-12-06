// 私信
// /send/text?user_ids=32953014&msg=test
module.exports = (query, request) => {
  query.cookie.os = 'pc';
  const data = {
    id: query.playlist,
    type: 'text',
    msg: query.msg,
    userIds: '[' + query.user_ids + ']',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/msg/private/send',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};