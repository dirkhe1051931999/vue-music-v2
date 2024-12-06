// 垃圾桶
// /fm_trash?id=347230
module.exports = (query, request) => {
  const data = {
    songId: query.id,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/radio/trash/add?alg=RT&songId=${query.id}&time=${query.time || 25}',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};