// 电台节目榜
// /dj/program/toplist
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
    offset: query.offset || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/program/toplist/v1',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};