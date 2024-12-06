// 曲风详情
// /style/detail?tagId=1
module.exports = (query, request) => {
  const data = {
    tagId: query.tagId,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/style-tag/home/head',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};