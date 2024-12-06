// 音乐人签到
// /musician/sign
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/creator/user/access`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};