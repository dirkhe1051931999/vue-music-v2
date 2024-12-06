// 领取会员成长值
// /vip/growthpoint/get
module.exports = (query, request) => {
  const data = {
    taskIds: query.ids,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/vipnewcenter/app/level/task/reward/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};