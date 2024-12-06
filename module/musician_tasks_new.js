// 获取音乐人任务
// /musician/tasks/new
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/nmusician/workbench/mission/stage/list `, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};