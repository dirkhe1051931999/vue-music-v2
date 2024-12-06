// 账号云豆数
// /musician/cloudbean
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/cloudbean/get`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};