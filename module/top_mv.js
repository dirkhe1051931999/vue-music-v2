// MV排行榜
// /top/mv
module.exports = (query, request) => {
  const data = {
    area: query.area || '',
    limit: query.limit || 30,
    offset: query.offset || 0,
    total: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/mv/toplist',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};