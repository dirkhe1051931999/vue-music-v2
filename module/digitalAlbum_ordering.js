// 购买数字专辑
// /digitalAlbum/ordering?id=86286082&payment=3&quantity=1
module.exports = (query, request) => {
  const data = {
    business: 'Album',
    paymentMethod: query.payment,
    digitalResources: JSON.stringify([
      {
        business: 'Album',
        resourceID: query.id,
        quantity: query.quantity,
      },
    ]),
    from: 'web',
  };
  return request('POST', `https://music.163.com/api/ordering/web/digital`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};