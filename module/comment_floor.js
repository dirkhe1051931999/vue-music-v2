// 楼层评论
// /comment/floor?parentCommentId=1438569889&id=29764564&type=0
const { CONFIG } = require('../data/config');
module.exports = (query, request) => {
  query.type = CONFIG.resourceTypeMap[query.type || 0];
  const data = {
    parentCommentId: query.parentCommentId,
    threadId: query.type + query.id,
    time: query.time || -1,
    limit: query.limit || 20,
  };
  return request('POST', `https://music.163.com/weapi/resource/comment/floor/get`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};