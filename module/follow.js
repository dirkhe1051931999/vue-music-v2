// 关注与取消关注用户
// /follow?id=32953014&t=1
module.exports = (query, request) => {
  query.cookie.os = 'pc';
  query.t = query.t === 1 ? 'follow' : 'delfollow';
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: '/weapi/user/${query.t}/${query.id}',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};