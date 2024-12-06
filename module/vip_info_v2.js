// 获取 VIP 信息
// /vip/info/v2?uid=1
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/api/music-vip-membership/client/vip/info`,
    {
      userId: query.uid || '',
    },
    { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
  );
};