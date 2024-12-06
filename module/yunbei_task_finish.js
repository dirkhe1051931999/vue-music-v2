// 云贝完成任务
// /yunbei/task/finish
module.exports = (query, request) => {
  const data = {
    userTaskId: query.userTaskId,
    depositCode: query.depositCode || '0',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/usertool/task/point/receive',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};