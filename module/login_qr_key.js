// 二维码 key 生成接口
// /login/qr/key
module.exports = async (query, request) => {
  const data = {
    type: 3,
  };
  const result = await request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/login/qrcode/unikey',
  });
  return {
    status: 200,
    body: {
      data: result.body,
      code: 200,
    },
    cookie: result.cookie,
  };
};