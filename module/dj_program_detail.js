// 电台节目详情
// /dj/program/detail?id=1367665101
module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/dj/program/detail',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};