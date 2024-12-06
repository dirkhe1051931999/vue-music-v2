// 编辑歌单
// /playlist/update?id=24381616&name=新歌单&desc=描述&tags=欧美
module.exports = (query, request) => {
  query.cookie.os = 'pc';
  query.desc = query.desc || '';
  query.tags = query.tags || '';
  const data = {
    '/api/playlist/desc/update': `{"id":${query.id},"desc":"${query.desc}"}`,
    '/api/playlist/tags/update': `{"id":${query.id},"tags":"${query.tags}"}`,
    '/api/playlist/update/name': `{"id":${query.id},"name":"${query.name}"}`,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/batch',
  });
};