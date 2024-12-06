// 曲风偏好
// /style/preference
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/tag/my/preference/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};