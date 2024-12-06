// 获取动态评论
// /comment/event?threadId=A_EV_2_6559519868_32953014
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', `https://music.163.com/weapi/v1/resource/comments/${query.threadId}`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};