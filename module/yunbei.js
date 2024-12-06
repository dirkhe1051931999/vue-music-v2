// 云贝
// /yunbei
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/point/signed/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};