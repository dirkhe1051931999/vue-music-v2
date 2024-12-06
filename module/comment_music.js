// 歌曲评论
// /comment/music?id=186016&limit=1
module.exports = (query, request) => {
  query.cookie.os = 'pc';
  const data = {
    rid: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', `https://music.163.com/weapi/v1/resource/comments/R_SO_4_${query.id}`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};