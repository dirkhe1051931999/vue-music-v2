// 编辑歌单顺序
// /playlist/order/update?ids=[111,222]
module.exports = (query, request) => {
  const data = {
    ids: query.ids,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/playlist/order/update',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};