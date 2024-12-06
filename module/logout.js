// 退出登录
// /logout
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: '/weapi/logout',
      ua: 'pc',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};