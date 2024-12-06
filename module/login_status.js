// 登录状态
// /login/status
module.exports = async (query, request) => {
  const data = {};
  let result = await request('POST', `https://music.163.com/api/w/nuser/account/get`, data, {
    crypto: 'weapi',
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