// 电台评论
// /comment/dj?id=794062371
module.exports = (query, request) => {
  query.cookie.os = 'pc';
  const data = {
    rid: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: `/weapi/v1/resource/comments/A_DJ_1_${query.id}`,
  });
};