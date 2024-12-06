// TA关注的人(关注)
// /user/follows?uid=32953014
module.exports = (query, request) => {
  const data = {
    offset: query.offset || 0,
    limit: query.limit || 30,
    order: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: `/weapi/user/getfollows/${query.uid}`,
    cookie: query.cookie,
    proxy: query.proxy,
  });
};