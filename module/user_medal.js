// 用户徽章
// /user/medal?uid=32953014
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {
      uid: query.uid,
    },
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/medal/user/page',
    }
  );
};