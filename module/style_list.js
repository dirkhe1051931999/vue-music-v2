// 曲风列表
// /style/list
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/tag/list/get`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};