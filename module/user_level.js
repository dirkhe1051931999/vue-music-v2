// 类别热门电台
// /user/level
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/user/level`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};