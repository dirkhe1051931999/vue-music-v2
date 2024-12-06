// 用户状态
// /user/social/status?uid=32953014
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {
      visitorId: query.uid,
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/social/user/status',
    }
  );
};