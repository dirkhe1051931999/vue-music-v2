// 播客删除
// /voice/delete?ids=29730819
module.exports = (query, request) => {
  const data = {
    ids: query.ids,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/content/voice/delete',
  });
};