// 话题详情
// /topic/detail?actid=111551188
module.exports = (query, request) => {
  const data = {
    actid: query.actid,
  };
  return request('POST', `https://music.163.com/api/act/detail`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};