// 用户创建的电台
// /user/audio?uid=32953014
module.exports = (query, request) => {
  const data = {
    userId: query.uid,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/djradio/get/byuser',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};