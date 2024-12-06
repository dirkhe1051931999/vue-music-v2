// 歌单评论
// /comment/playlist?id=705123491
module.exports = (query, request) => {
  query.cookie.os = 'pc';
  const data = {
    rid: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', `https://music.163.com/weapi/v1/resource/comments/A_PL_0_${query.id}`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};