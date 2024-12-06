// 将mlog id转为video id
// /mlog/to/video?id=a1qOVPTWKS1ZrK8
module.exports = (query, request) => {
  const data = {
    mlogId: query.id,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/mlog/video/convert/id',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};