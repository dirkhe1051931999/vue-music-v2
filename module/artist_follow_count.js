// 歌手粉丝数量
// /artist/follow/count?id=6452
module.exports = (query, request) => {
  const data = {
    id: query.id,
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/artist/follow/count/get',
  });
};