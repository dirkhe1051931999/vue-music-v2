// 用户歌单
// /user/playlist?uid=32953014
module.exports = (query, request) => {
  const data = {
    uid: query.uid,
    limit: query.limit || 30,
    offset: query.offset || 0,
    includeVideo: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/user/playlist',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};