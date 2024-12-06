// 收藏/取消收藏专辑
// /album/sub?t=1&id=251406892
module.exports = (query, request) => {
  query.t = query.t === 1 ? 'sub' : 'unsub';
  const data = {
    id: query.id,
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: `/weapi/album/${query.t}`,
  });
};