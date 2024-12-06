// 更新歌单描述
// /playlist/desc/update?id=24381616&desc=描述
module.exports = (query, request) => {
  const data = {
    id: query.id,
    desc: query.desc,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/playlist/desc/update',
  });
};