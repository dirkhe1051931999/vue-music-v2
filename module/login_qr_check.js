// /login/qr/check?key=xxx
module.exports = async (query, request) => {
  const data = {
    key: query.key,
    type: 3,
  };
  try {
    let result = await request('POST', '', data, {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/login/qrcode/client/login',
    });
    return {
      status: 200,
      body: {
        ...result.body,
        cookie: result.cookie.join(';'),
      },
      cookie: result.cookie,
    };
  } catch (error) {
    return {
      status: 200,
      body: {},
    };
  }
};