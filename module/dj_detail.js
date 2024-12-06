// 电台详情
// /dj/detail?rid=336355127
module.exports = (query, request) => {
  const data = {
    id: query.rid,
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/djradio/get',
  });
};