// 云盘歌曲删除
// /user/cloud/del?ids=[431305]
module.exports = (query, request) => {
  const data = {
    songIds: [query.id],
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/cloud/del',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};