// 私信
// /msg/private
module.exports = (query, request) => {
  const data = {
    offset: query.offset || 0,
    limit: query.limit || 30,
    total: 'true',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/msg/private/users',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};