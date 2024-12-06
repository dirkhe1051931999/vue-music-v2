// 转发动态
// /event/forward?evId=6712917601&uid=32953014&forwards=测试内容
module.exports = (query, request) => {
  query.cookie.os = 'pc';
  const data = {
    forwards: query.forwards,
    id: query.evId,
    eventUserId: query.uid,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/event/forward',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};