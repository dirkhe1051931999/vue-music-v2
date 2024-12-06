// 私人FM
// /personal_fm
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: '/weapi/v1/radio/get',
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};