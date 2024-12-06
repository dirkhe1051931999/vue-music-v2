// 热门评论
// /comment/hot?id=186016&type=0
const { CONFIG } = require('../data/config');
module.exports = (query, request) => {
  query.cookie.os = 'pc';
  query.type = CONFIG.resourceTypeMap[query.type || 0];
  const data = {
    rid: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', `https://music.163.com/weapi/v1/resource/hotcomments/${query.type}${query.id}`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};