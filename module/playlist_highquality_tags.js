// 精品歌单 tags
// /playlist/highquality/tags
module.exports = (query, request) => {
  const data = {};
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/playlist/highquality/tags',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};