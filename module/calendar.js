// 音乐日历
// /calendar?startTime=1606752000000&endTime=1609430399999
module.exports = (query, request) => {
  const data = {
    startTime: query.startTime || Date.now(),
    endTime: query.endTime || Date.now(),
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/mcalendar/detail',
  });
};