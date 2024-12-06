// 云贝
// /yunbei
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/point/signed/get`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};