// 初始化名字
// /activate/init/profile?nickname=testUser2019
module.exports = (query, request) => {
  const data = {
    nickname: query.nickname,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    url: '/api/activate/initProfile',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};