// MV详情
// /mv/detail?mvid=5436712
module.exports = (query, request) => {
  const data = {
    id: query.mvid,
  };
  return request('POST', `https://music.163.com/weapi/mv/detail`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};