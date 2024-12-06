// 重复名字检测
// /nickname/check?nickname=hejian
module.exports = (query, request) => {
  const data = {
    nickname: query.nickname,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/nickname/duplicated',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};