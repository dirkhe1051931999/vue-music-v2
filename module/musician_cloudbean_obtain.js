// 领取云豆
// /musician/cloudbean/obtain?id=7036416928&period=1
module.exports = (query, request) => {
  const data = {
    userMissionId: query.id,
    period: query.period,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/nmusician/workbench/mission/reward/obtain/new',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};