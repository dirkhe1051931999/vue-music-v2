// 用户绑定信息
// /user/binding
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: `/weapi/v1/user/bindings/${query.uid}`,
    cookie: query.cookie,
    proxy: query.proxy,
  });
};