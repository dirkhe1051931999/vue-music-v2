// 删除歌单
// /playlist/delete?id=24381616
module.exports = (query, request) => {
  const data = {
    ids: '[' + query.id + ']',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/playlist/remove',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};