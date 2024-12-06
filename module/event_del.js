// 删除动态
// /event/del?evId=6712917601
module.exports = (query, request) => {
  const data = {
    id: query.evId,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/eapi/event/delete',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};