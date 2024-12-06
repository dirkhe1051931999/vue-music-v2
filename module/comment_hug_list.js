// 评论抱一抱列表
// /comment/hug/list?uid=285516405&cid=1167145843&sid=863481066&pageSize=2&page=1
const { CONFIG } = require('../data/config');
module.exports = (query, request) => {
  query.type = CONFIG.resourceTypeMap[query.type || 0];
  const threadId = query.type + query.sid;
  const data = {
    targetUserId: query.uid,
    commentId: query.cid,
    cursor: query.cursor || '-1',
    threadId: threadId,
    pageNo: query.page || 1,
    idCursor: query.idCursor || -1,
    pageSize: query.pageSize || 100,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/v2/resource/comments/hug/list',
  });
};