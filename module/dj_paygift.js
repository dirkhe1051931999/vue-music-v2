// 付费电台
// /dj/paygift?limit=30&offset=0
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 30,
    offset: query.offset || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/djradio/home/paygift/list?_nmclfl=1',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};