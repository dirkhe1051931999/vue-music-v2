// 歌手粉丝
// /artist/fans?id=6452
module.exports = (query, request) => {
  const data = {
    id: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', `https://music.163.com/weapi/artist/fans/get`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};