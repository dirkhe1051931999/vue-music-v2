// 视频点赞转发评论数数据
// /video/detail/info?vid=89ADDE33C0AAE8EC14B99F6750DB954D
module.exports = (query, request) => {
  const data = {
    threadid: `R_VI_62_${query.vid}`,
    composeliked: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/comment/commentthread/info',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};