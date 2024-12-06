// 全部视频列表
// /video/timeline/all
module.exports = (query, request) => {
  const data = {
    groupId: 0,
    offset: query.offset || 0,
    need_preview_url: 'true',
    total: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/videotimeline/otherclient/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};