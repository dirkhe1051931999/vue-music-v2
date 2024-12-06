// 播客列表详情
// /voicelist/detail?id=29730819
module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/voice/workbench/voicelist/detail',
  });
};