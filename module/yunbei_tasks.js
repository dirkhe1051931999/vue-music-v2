// 云贝任务
// /yunbei/tasks
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/usertool/task/list/all',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};