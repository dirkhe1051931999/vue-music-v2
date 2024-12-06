// 推荐新歌
// /personalized/newsong
module.exports = (query, request) => {
  const data = {
    type: 'recommend',
    limit: query.limit || 10,
    areaId: query.areaId || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/personalized/newsong',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};