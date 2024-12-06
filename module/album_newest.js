// 最新专辑
// /album/newest
module.exports = (query, request) => {
  return request('POST', `https://music.163.com/weapi/discovery/newAlbum`, {}, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};