// 云盘数据详情
// /user/cloud/detail?id=431305
module.exports = (query, request) => {
  const id = query.id.replace(/\s/g, '').split(',');
  const data = {
    songIds: id,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/v1/cloud/get/byids',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};