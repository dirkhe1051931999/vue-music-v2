// 视频评论
// /comment/video?id=89ADDE33C0AAE8EC14B99F6750DB954D
module.exports = (query, request) => {
  query.cookie.os = 'pc';
  const data = {
    rid: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', `https://music.163.com/weapi/v1/resource/comments/R_VI_62_${query.id}`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};