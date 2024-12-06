// 粉丝来源
// /fanscenter/trend/list
module.exports = (query, request) => {
  const data = {
    startTime: query.startTime || Date.now() - 7 * 24 * 3600 * 1000,
    endTime: query.endTime || Date.now(),
    type: query.type || 0, //新增关注:0 新增取关:1
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/fanscenter/trend/list',
  });
};