// 乐谱列表
// /sheet/list?id=1815684465
module.exports = (query, request) => {
  const data = {
    id: query.id,
    abTest: query.ab || 'b',
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/music/sheet/list/v1',
  });
};