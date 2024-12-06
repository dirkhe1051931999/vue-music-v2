// 分享歌曲到动态
// /share/resource?id=1297494209&msg=测试
module.exports = (query, request) => {
  const data = {
    type: query.type || 'song', // song,playlist,mv,djprogram，djradio
    msg: query.msg || '',
    id: query.id || '',
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/share/friends/resource',
  });
};