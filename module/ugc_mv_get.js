// mv简要百科信息
// /ugc/mv/get?id=5436712
module.exports = (query, request) => {
  const data = {
    mvId: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/rep/ugc/mv/get',
  });
};