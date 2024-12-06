// MV 点赞转发评论数数据
// /mv/detail/info?mvid=5436712
module.exports = (query, request) => {
  const data = {
    threadid: `R_MV_5_${query.mvid}`,
    composeliked: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/comment/commentthread/info',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};