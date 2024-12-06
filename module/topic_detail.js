// 话题详情
// /topic/detail?actid=111551188
module.exports = (query, request) => {
  const data = {
    actid: query.actid,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/act/detail',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};