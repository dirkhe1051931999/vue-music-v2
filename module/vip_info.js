// 获取 VIP 信息
// /vip/info?uid=1
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/api/music-vip-membership/front/vip/info`,
    {
      userId: query.uid || '',
    },
    { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
  );
};