// 专辑动态信息
// /album/detail/dynamic?id=251406892
module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', `https://music.163.com/weapi/album/detail/dynamic`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};