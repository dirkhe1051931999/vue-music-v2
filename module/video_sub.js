// 收藏与取消收藏视频
// /video/sub?t=1&id=89ADDE33C0AAE8EC14B99F6750DB954D
module.exports = (query, request) => {
  query.t = query.t === 1 ? 'sub' : 'unsub';
  const data = {
    id: query.id,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: `/weapi/cloudvideo/video/${query.t}`,
    cookie: query.cookie,
    proxy: query.proxy,
  });
};