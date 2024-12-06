// 独家放送
// /personalized/privatecontent
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: '/weapi/personalized/privatecontent',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};