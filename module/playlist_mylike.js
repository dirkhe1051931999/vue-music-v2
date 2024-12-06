// 获取点赞过的视频
// /playlist/mylike
module.exports = (query, request) => {
  const data = {
    time: query.time || '-1',
    limit: query.limit || '12',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/mlog/playlist/mylike/bytime/get',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};