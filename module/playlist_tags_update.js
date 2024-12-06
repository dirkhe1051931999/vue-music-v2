// 更新歌单标签
// /playlist/tags/update?id=24381616&tags=["标签1","标签2"]
module.exports = (query, request) => {
  const data = {
    id: query.id,
    tags: query.tags,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/playlist/tags/update',
  });
};