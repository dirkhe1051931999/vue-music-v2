// 国家编码列表
// /countries/code/list
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/lbs/countries/v1',
  });
};