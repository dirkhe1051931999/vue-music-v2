// 乐谱预览
// /sheet/preview?id=1815684465
module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/music/sheet/preview/info',
  });
};