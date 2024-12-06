// 领取云豆
// /musician/cloudbean/obtain?id=7036416928&period=1
module.exports = (query, request) => {
  const data = {
    userMissionId: query.id,
    period: query.period,
  };
  return request('POST', `https://music.163.com/api/nmusician/workbench/mission/reward/obtain/new`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};