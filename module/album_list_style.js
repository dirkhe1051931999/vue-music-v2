// 数字专辑-语种风格馆
// /album/list/style?limit=10
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 10,
    offset: query.offset || 0,
    total: true,
    area: query.area || 'Z_H', //Z_H:华语,E_A:欧美,KR:韩国,JP:日本
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/vipmall/appalbum/album/style',
  });
};