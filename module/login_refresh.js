// 登录刷新
// /login/refresh
module.exports = async (query, request) => {
  let result = await request(
    'POST',
    '',
    {},
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/login/token/refresh',
    }
  );
  if (result.body.code === 200) {
    result = {
      status: 200,
      body: {
        ...result.body,
        cookie: result.cookie.join(';'),
      },
      cookie: result.cookie,
    };
  }
  return result;
};