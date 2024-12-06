// 粉丝省份比例
// /fanscenter/basicinfo/province/get
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/fanscenter/basicinfo/province/get',
  });
};