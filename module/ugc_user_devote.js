// 用户贡献条目、积分、云贝数量
// /ugc/user/devote
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/rep/ugc/user/devote',
  });
};