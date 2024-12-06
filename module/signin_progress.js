// 签到进度
// /signin/progress?moduleId=1207signin-1207signin
module.exports = (query, request) => {
  const data = {
    moduleId: query.moduleId || '1207signin-1207signin',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/act/modules/signin/v2/progress',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};