// 创建歌单
// /playlist/create?name=测试歌单&type=VIDEO&privacy=10
module.exports = (query, request) => {
  query.cookie.os = 'pc';
  const data = {
    name: query.name,
    privacy: query.privacy || '0', // 0 普通歌单, 10 隐私歌单
    type: query.type || 'NORMAL', // 默认 NORMAL, VIDEO 视频歌单, SHARED 共享歌单
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/playlist/create',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};