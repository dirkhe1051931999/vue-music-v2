// 首页轮播图
// /banner
module.exports = (query, request) => {
  const type =
    {
      0: 'pc',
      1: 'android',
      2: 'iphone',
      3: 'ipad',
    }[query.type || 0] || 'pc';
  return request(
    'POST',
    '',
    { clientType: type },
    {
      crypto: 'weapi',
      proxy: query.proxy,
      cookie: query.cookie,
      url: '/weapi/v2/banner/get',
    }
  );
};