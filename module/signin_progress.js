// 签到进度
// /signin/progress?moduleId=1207signin-1207signin
module.exports = (query, request) => {
  const data = {
    moduleId: query.moduleId || '1207signin-1207signin',
  };
  return request('POST', `https://music.163.com/api/act/modules/signin/v2/progress`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};