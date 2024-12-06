// 曲风详情
// /style/detail?tagId=1
module.exports = (query, request) => {
  const data = {
    tagId: query.tagId,
  };
  return request('POST', `https://music.163.com/api/style-tag/home/head`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};