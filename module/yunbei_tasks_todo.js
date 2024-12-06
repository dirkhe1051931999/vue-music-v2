// 云贝 todo 任务
// /yunbei/tasks/todo
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/usertool/task/todo/query',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};