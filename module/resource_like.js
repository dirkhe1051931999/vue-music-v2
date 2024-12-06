// 点赞与取消点赞资源
// /resource/like?t=1&type=1&id=5436712
const { CONFIG } = require('../data/config');
module.exports = (query, request) => {
  query.cookie.os = 'pc';
  query.t = query.t === 1 ? 'like' : 'unlike';
  query.type = CONFIG.resourceTypeMap[query.type];
  const data = {
    threadId: query.type + query.id,
  };
  if (query.type === 'A_EV_2_') {
    data.threadId = query.threadId;
  }
  return request('POST', `https://music.163.com/weapi/resource/${query.t}`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};