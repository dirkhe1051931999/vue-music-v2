// 会员任务
// /vip/tasks
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/vipnewcenter/app/level/task/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};