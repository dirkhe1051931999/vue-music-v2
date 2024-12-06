// 会员成长值
// /vip/growthpoint/get?ids=1
module.exports = (query, request) => {
  const data = {
    taskIds: query.ids,
  };
  return request('POST', `https://music.163.com/api/vipnewcenter/app/level/growhpoint/basic`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};