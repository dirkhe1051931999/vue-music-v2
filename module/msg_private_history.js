// 私信内容
// /msg/private/history?uid=9003
module.exports = (query, request) => {
  const data = {
    userId: query.uid,
    offset: query.offset || 0,
    limit: query.limit || 30,
    total: 'true',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/msg/private/history',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};