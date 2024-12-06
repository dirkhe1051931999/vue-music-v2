// 二维码检测
// /verify/qrcodestatus
module.exports = async (query, request) => {
  const data = {
    qrCode: query.qr,
  };
  return await request(`/api/frontrisk/verify/qrcodestatus`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};