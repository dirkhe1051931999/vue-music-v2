// 类别热门电台
// /dj/radio/hot?cateId=2001
module.exports = (query, request) => {
  const data = {
    cateId: query.cateId,
    limit: query.limit || 30,
    offset: query.offset || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/djradio/hot',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};