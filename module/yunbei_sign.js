// 云贝签到
// /yunbei/sign
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/pointmall/user/sign`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};