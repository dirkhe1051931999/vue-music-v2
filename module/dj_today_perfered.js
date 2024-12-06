// dj今日优选
// /dj/today/perfered
module.exports = (query, request) => {
  const data = {
    page: query.page || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/djradio/home/today/perfered',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};