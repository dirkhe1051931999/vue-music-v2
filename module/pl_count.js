// 私信和通知接口
// /pl/count
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/pl/count`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};