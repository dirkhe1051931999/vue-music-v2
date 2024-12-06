// 话题详情热门动态
// /topic/detail/event/hot?actid=111551188
module.exports = (query, request) => {
  const data = {
    actid: query.actid,
  };
  return request('POST', `https://music.163.com/api/act/event/hot`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};