// 粉丝性别比例
// /fanscenter/basicinfo/gender/get
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/fanscenter/basicinfo/gender/get',
  });
};