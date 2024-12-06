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
  return request('POST', `https://music.163.com/api/comment/user/comment/history`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};