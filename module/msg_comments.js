// 评论
// /msg/comments?uid=32953014
module.exports = (query, request) => {
  const data = {
    beforeTime: query.beforeTime || '-1',
    limit: query.limit || 30,
    total: 'true',
    uid: query.uid,
  };
  // 448109360
  return request('POST', '', data, {
    crypto: 'weapi',
    url: `/weapi/v1/user/comments/${query.uid}`,
    cookie: query.cookie,
    proxy: query.proxy,
  });
};