// 电台24小时节目榜
// /di/program/toplist/hours
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
    // 不支持 offset
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/djprogram/toplist/hours',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};