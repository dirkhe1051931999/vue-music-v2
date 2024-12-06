// 粉丝年龄比例
// /fanscenter/basicinfo/age/get
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/fanscenter/basicinfo/age/get',
  });
};