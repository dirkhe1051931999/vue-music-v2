// 相似MV
// /simi/mv?id=5436712
module.exports = (query, request) => {
  const data = {
    mvid: query.mvid,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/discovery/simiMV',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};