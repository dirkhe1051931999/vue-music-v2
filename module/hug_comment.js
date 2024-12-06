// 抱一抱评论
// /hug/comment?uid=32953014&cid=1167145843&sid=863481066
const { CONFIG } = require('../data/config');
module.exports = (query, request) => {
  query.type = CONFIG.resourceTypeMap[query.type || 0];
  const threadId = query.type + query.sid;
  const data = {
    targetUserId: query.uid,
    commentId: query.cid,
    threadId: threadId,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/v2/resource/comments/hug/listener',
  });
};