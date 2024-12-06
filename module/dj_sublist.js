// 订阅电台列表
//  /dj/sublist
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 30,
    offset: query.offset || 0,
    total: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/djradio/get/subed',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};