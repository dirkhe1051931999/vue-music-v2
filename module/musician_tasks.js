// 获取音乐人任务
// /musician/tasks
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/nmusician/workbench/mission/cycle/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};