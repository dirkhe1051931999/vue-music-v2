// 相关歌单推荐
// /playlist/detail/rcmd/get?id=24381616
module.exports = (query, request) => {
  const data = {
    scene: 'playlist_head',
    playlistId: query.id,
    newStyle: 'true',
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/playlist/detail/rcmd/get',
  });
};