// 收藏计数
// /user/subcount
module.exports = (query, request) => {
  return request('POST', '', {}, { crypto: 'weapi', url: '/weapi/subcount', cookie: query.cookie, proxy: query.proxy });
};