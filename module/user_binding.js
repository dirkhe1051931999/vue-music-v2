// 用户绑定信息
// /user/binding
module.exports = (query, request) => {
  const data = {};
  return request('POST', `https://music.163.com/api/v1/user/bindings/${query.uid}`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};