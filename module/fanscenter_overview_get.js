// 粉丝数量
// /api/fanscenter/overview/get
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/fanscenter/overview/get',
  });
};