// 动态
// /event?pagesize=30&lasttime=1556740526369
module.exports = (query, request) => {
  const data = {
    pagesize: query.pagesize || 20,
    lasttime: query.lasttime || -1,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/v1/event/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};