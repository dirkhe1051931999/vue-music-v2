// 音乐人签到
// /musician/sign
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/creator/user/access',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};