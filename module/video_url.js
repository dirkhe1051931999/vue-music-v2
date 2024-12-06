// 视频链接
// /video/url?id=89ADDE33C0AAE8EC14B99F6750DB954D
module.exports = (query, request) => {
  const data = {
    ids: '["' + query.id + '"]',
    resolution: query.res || 1080,
  };
  return request('POST', `https://music.163.com/weapi/cloudvideo/playurl`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};