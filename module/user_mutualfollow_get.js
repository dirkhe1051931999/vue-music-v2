// 用户是否互相关注
// /user/mutualfollow/get?uid=32953014
module.exports = (query, request) => {
  const data = {
    friendid: query.uid,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/user/mutualfollow/get',
  });
};