// 获取音乐人任务
// /musician/tasks/new
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/nmusician/workbench/mission/stage/list ',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};