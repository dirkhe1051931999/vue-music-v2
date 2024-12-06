// 黑胶时光机
// /vip/timemachine
module.exports = (query, request) => {
  const data = {};
  if (query.startTime && query.endTime) {
    data.startTime = query.startTime;
    data.endTime = query.endTime;
    data.type = 1;
    data.limit = query.limit || 60;
  }
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/vipmusic/newrecord/weekflow',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};