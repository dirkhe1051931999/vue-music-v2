// 云盘数据
// /user/cloud
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 30,
    offset: query.offset || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/v1/cloud/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};