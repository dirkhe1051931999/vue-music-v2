// 删除歌单
// /playlist/delete?id=24381616
module.exports = (query, request) => {
  const data = {
    ids: '[' + query.id + ']',
  };
  return request('POST', `https://music.163.com/api/playlist/remove`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};