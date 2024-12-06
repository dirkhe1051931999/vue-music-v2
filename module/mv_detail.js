// MV详情
// /mv/detail?mvid=5436712
module.exports = (query, request) => {
  const data = {
    id: query.mvid,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/mv/detail',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};