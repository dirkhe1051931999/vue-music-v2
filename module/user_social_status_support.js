// 用户状态 - 支持设置的状态
// /user/social/status/support
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/social/user/status/support',
    }
  );
};