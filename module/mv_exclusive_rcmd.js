// 网易出品
// /mv/exclusive/rcmd
module.exports = (query, request) => {
  const data = {
    offset: query.limit || 0,
    limit: query.limit || 30,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/mv/exclusive/rcmd',
  });
};