// @我
// /msg/forwards
module.exports = (query, request) => {
  const data = {
    offset: query.offset || 0,
    limit: query.limit || 30,
    total: 'true',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/forwards/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};