// 操作记录
// /weblog
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: '/weapi/feedback/weblog',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};