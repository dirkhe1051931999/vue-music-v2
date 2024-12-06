// 云贝账号信息
// /yunbei/info
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/v1/user/info',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};