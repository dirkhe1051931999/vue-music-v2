// 关注TA的人(粉丝)
// /user/followeds?uid=32953014
module.exports = (query, request) => {
  const data = {
    userId: query.uid,
    time: query.lasttime || -1,
    limit: query.limit || 30,
    offset: query.offset || 0,
    getcounts: 'true',
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: `/api/user/getfolloweds/${query.uid}`,
  });
};