// 独家放送列表
//  /personalized/privatecontent/list
module.exports = (query, request) => {
  const data = {
    offset: query.offset || 0,
    total: 'true',
    limit: query.limit || 60,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/v2/privatecontent/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};