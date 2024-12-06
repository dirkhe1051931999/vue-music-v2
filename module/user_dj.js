// 用户电台节目
// /user/dj?uid=32953014
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 30,
    offset: query.offset || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: `/weapi/dj/program/${query.uid}`,
    cookie: query.cookie,
    proxy: query.proxy,
  });
};