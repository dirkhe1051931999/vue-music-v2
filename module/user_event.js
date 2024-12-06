// 用户动态
// /user/event?uid=32953014
module.exports = (query, request) => {
  const data = {
    getcounts: true,
    time: query.lasttime || -1,
    limit: query.limit || 30,
    total: false,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: `/weapi/event/get/${query.uid}`,
    cookie: query.cookie,
    proxy: query.proxy,
  });
};