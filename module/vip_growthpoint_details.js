// 会员成长值领取记录
// /vip/growthpoint/details
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/vipnewcenter/app/level/growth/details',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};