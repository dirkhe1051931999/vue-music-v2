// 会员成长值领取记录
// /vip/growthpoint/details
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', `https://music.163.com/api/vipnewcenter/app/level/growth/details`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};