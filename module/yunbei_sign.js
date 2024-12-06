// 云贝签到
// /yunbei/sign
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/pointmall/user/sign',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};