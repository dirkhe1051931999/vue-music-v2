// 全部MV
// /mv/all?area=港台
module.exports = (query, request) => {
  const data = {
    tags: JSON.stringify({
      地区: query.area || '全部',
      类型: query.type || '全部',
      排序: query.order || '上升最快',
    }),
    offset: query.limit || 0,
    total: 'true',
    limit: query.limit || 30,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/mv/all',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};