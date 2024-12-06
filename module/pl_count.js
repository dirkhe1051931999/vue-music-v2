// 私信和通知接口
// /pl/count
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/pl/count',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};