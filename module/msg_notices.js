// 通知
// /msg/notices
module.exports = (query, request) => {
  const data = {
    offset: query.offset || 0,
    limit: query.limit || 30,
    total: 'true',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/msg/notices',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};