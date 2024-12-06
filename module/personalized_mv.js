// 推荐MV
// /personalized/mv
module.exports = (query, request) => {
  return request('POST', `https://music.163.com/weapi/personalized/mv`, {}, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};