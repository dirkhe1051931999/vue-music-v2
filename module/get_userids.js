// 获取用户id
// /get/userids?nicknames=hejian
module.exports = (query, request) => {
  const data = {
    nicknames: query.nicknames,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/user/getUserIds',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};