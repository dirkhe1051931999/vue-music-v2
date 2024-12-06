// mlog链接
// /mlog/url?id=a1qOVPTWKS1ZrK8
module.exports = (query, request) => {
  const data = {
    id: query.id,
    resolution: query.res || 1080,
    type: 1,
  };
  return request('POST', `https://music.163.com/api/mlog/detail/v1`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};