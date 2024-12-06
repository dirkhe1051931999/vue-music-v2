// 用户历史评论
// /user/comment/history?uid=32953014&limit=1&time=1616217577564
module.exports = (query, request) => {
  const data = {
    compose_reminder: 'true',
    compose_hot_comment: 'true',
    limit: query.limit || 10,
    user_id: query.uid,
    time: query.time || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/comment/user/comment/history',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};