// 新版评论接口
// /comment/new?type=0&id=1407551413&sortType=3
const { CONFIG } = require('../data/config');
module.exports = (query, request) => {
  query.type = CONFIG.resourceTypeMap[query.type];
  const threadId = query.type + query.id;
  const pageSize = query.pageSize || 20;
  const pageNo = query.pageNo || 1;
  let sortType = Number(query.sortType) || 99;
  if (sortType === 1) {
    sortType = 99;
  }
  let cursor = '';
  switch (sortType) {
    case 99:
      cursor = (pageNo - 1) * pageSize;
      break;
    case 2:
      cursor = 'normalHot#' + (pageNo - 1) * pageSize;
      break;
    case 3:
      cursor = query.cursor || '0';
      break;
    default:
      break;
  }
  const data = {
    threadId: threadId,
    pageNo,
    showInner: query.showInner || true,
    pageSize,
    cursor: cursor,
    sortType: sortType, //99:按推荐排序,2:按热度排序,3:按时间排序
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/v2/resource/comments',
  });
};