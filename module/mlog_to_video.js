// 将mlog id转为video id
// /mlog/to/video?id=a1qOVPTWKS1ZrK8
module.exports = (query, request) => {
  const data = {
    mlogId: query.id,
  };
  return request('POST', `https://music.163.com/api/mlog/video/convert/id`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};