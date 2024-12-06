// 视频链接
// /video/group?id=9104
module.exports = (query, request) => {
  const data = {
    groupId: query.id,
    offset: query.offset || 0,
    need_preview_url: true,
    total: true,
  };
  return request('POST', `https://music.163.com/weapi/videotimeline/videogroup/get`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};