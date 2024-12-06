// 公开隐私歌单
// /playlist/privacy?id=222
module.exports = (query, request) => {
  const data = {
    id: query.id,
    privacy: 0,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/playlist/update/privacy',
  });
};