// 电台banner
// dj/banner
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/weapi/djradio/banner/get`, {}, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};