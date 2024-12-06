// 用户详情
// /user/detail?uid=32953014
module.exports = (query, request) => {
  return request(
    'POST',
    '',
    {},
    {
      crypto: 'weapi',
      url: `/weapi/v1/user/detail/${query.uid}`,
      cookie: query.cookie,
      proxy: query.proxy,
    }
  );
};