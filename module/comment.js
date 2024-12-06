// 发送与删除评论
// /comment?t=1&type=1&id=5436712&content=好听
const { CONFIG } = require('../data/config');
module.exports = (query, request) => {
  query.t = {
    1: 'add',
    0: 'delete',
    2: 'reply',
  }[query.t];
  query.type = CONFIG.resourceTypeMap[query.type || 0];
  const data = {
    threadId: query.type + query.id,
  };

  if (query.type === 'A_EV_2_') {
    data.threadId = query.threadId;
  }
  if (query.t === 'add') data.content = query.content;
  else if (query.t === 'delete') data.commentId = query.commentId;
  else if (query.t === 'reply') {
    data.commentId = query.commentId;
    data.content = query.content;
  }
  return request('POST', `https://music.163.com/weapi/resource/comments/${query.t}`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};