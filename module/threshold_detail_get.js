// 获取达人达标信息
// /threshold/detail/get
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/influencer/web/apply/threshold/detail/get',
  });
};