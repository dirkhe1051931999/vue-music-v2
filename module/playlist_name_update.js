// 更新歌单名
// /playlist/name/update?id=24381616&name=歌单名
module.exports = (query, request) => {
  const data = {
    id: query.id,
    name: query.name,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/playlist/update/name',
  });
};