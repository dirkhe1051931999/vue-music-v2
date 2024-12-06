// 获取达人用户信息
// /creator/authinfo/get
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/user/creator/authinfo/get',
  });
};