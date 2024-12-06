// 话题详情热门动态
// /topic/detail/event/hot?actid=111551188
module.exports = (query, request) => {
  const data = {
    actid: query.actid,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/act/event/hot',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};