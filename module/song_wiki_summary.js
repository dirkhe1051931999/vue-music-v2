// 音乐百科基础信息
// /song/wiki/summary?id=33894312
module.exports = (query, request) => {
  const data = {
    songId: query.id,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/song/play/about/block/page',
  });
};