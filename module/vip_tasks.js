// 会员任务
// /vip/tasks
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/vipnewcenter/app/level/task/list`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};