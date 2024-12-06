// 最近听歌列表
// /recent/listen/list
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/pc/recent/listen/list',
  });
};