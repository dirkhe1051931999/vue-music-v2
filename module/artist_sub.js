// 收藏与取消收藏歌手
// /artist/sub?id=6452
module.exports = (query, request) => {
  query.t = query.t === 1 ? 'sub' : 'unsub';
  const data = {
    artistId: query.id,
    artistIds: '[' + query.id + ']',
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: `/weapi/artist/${query.t}`,
  });
};