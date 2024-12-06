// 多类型搜索
// /search/multimatch?keywords=海阔天空
module.exports = (query, request) => {
  const data = {
    type: query.type || 1,
    s: query.keywords || '',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/search/suggest/multimatch',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};