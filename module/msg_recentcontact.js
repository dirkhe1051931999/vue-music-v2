// 最近联系
// /msg/recentcontact
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/msg/recentcontact/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};