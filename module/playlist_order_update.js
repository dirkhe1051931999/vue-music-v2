// 编辑歌单顺序
// /playlist/order/update?ids=[111,222]
module.exports = (query, request) => {
  const data = {
    ids: query.ids,
  };
  return request('POST', `https://music.163.com/api/playlist/order/update`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};