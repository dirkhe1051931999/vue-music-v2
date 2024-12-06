// 更新歌曲顺序
// /song/order/update?pid=24381616&ids=[2058263032,1497529942]
module.exports = (query, request) => {
  const data = {
    pid: query.pid,
    trackIds: query.ids,
    op: 'update',
  };

  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/playlist/manipulate/tracks',
  });
};