// 电台分类列表
// /dj/catelist
module.exports = (query, request) => {
  return request('POST', `https://music.163.com/weapi/djradio/category/get`, {}, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};