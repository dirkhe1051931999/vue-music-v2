// mlog链接
// /mlog/url?id=a1qOVPTWKS1ZrK8
module.exports = (query, request) => {
  const data = {
    id: query.id,
    resolution: query.res || 1080,
    type: 1,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/mlog/detail/v1',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};