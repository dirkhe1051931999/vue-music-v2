// 会员成长值
// /vip/growthpoint/get?ids=1
module.exports = (query, request) => {
  const data = {
    taskIds: query.ids,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/vipnewcenter/app/level/growhpoint/basic',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};