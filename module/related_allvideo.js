// 相关视频
// /related/allvideo?id=89ADDE33C0AAE8EC14B99F6750DB954D
module.exports = (query, request) => {
  const data = {
    id: query.id,
    type: /^\d+$/.test(query.id) ? 0 : 1,
  };
  return request('POST', `https://music.163.com/weapi/cloudvideo/v1/allvideo/rcmd`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};