// 乐签信息
// /sign/happy/info
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/sign/happy/info',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};