// 视频链接
// /video/group?id=9104
module.exports = (query, request) => {
  const data = {
    groupId: query.id,
    offset: query.offset || 0,
    need_preview_url: true,
    total: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/videotimeline/videogroup/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};