// 音乐人数据概况
// /musician/data/overview
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/creator/musician/statistic/data/overview/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};