// 已购单曲
// /song/purchased
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/single/mybought/song/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};