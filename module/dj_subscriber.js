// 电台详情
// /dj/subscriber?id=335425050
module.exports = (query, request) => {
  const data = {
    time: query.time || '-1',
    id: query.id,
    limit: query.limit || '20',
    total: 'true',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/djradio/subscriber',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};