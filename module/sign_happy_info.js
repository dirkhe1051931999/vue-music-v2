// 乐签信息
// /sign/happy/info
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/sign/happy/info`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};