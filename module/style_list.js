// 曲风列表
// /style/list
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/tag/list/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};