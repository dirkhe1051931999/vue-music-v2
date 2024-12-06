// MV链接
// /mv/url?id=5436712
module.exports = (query, request) => {
  const data = {
    id: query.id,
    r: query.res || 1080,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/song/enhance/play/mv/url',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};