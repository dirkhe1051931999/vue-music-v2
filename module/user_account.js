// 账号信息
// /user/account
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/nuser/account/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};