// 收藏与取消收藏歌单
// /playlist/subscribe?id=24381616&t=1
module.exports = (query, request) => {
  query.t = query.t === 1 ? 'subscribe' : 'unsubscribe';
  const data = {
    id: query.id,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/playlist/${query.t}',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};