// 歌手榜
// /toplist/artist
module.exports = (query, request) => {
  const data = {
    type: 1,
    limit: 100,
    offset: 0,
    total: true,
  };
  return request('POST', `https://music.163.com/weapi/toplist/artist`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};