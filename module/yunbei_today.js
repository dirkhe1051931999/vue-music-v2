// 云贝今日签到信息
// /yunbei/today
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/point/today/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};