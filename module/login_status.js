// 登录状态
// /login/status
module.exports = async (query, request) => {
  const data = {};
  let result = await request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/w/nuser/account/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
  if (result.body.code === 200) {
    result = {
      status: 200,
      body: {
        data: {
          ...result.body,
        },
      },
      cookie: result.cookie,
    };
  }
  return result;
};