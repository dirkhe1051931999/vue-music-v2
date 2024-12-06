// 用户状态 - 相同状态的用户
// /user/social/status/rcmd
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/social/user/status/rcmd',
    }
  );
};