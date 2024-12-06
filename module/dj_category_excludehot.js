// dj非热门类型
// /dj/category/excludehot
module.exports = (query, request) => {
  return request('POST', `https://music.163.com/weapi/djradio/category/excludehot`, {}, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};