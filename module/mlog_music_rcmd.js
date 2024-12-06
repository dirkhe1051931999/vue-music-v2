// 歌曲相关视频
// /mlog/url?id=a1qOVPTWKS1ZrK8
module.exports = (query, request) => {
  const data = {
    id: query.mvid || 0,
    type: 2,
    rcmdType: 20,
    limit: query.limit || 10,
    extInfo: JSON.stringify({ songId: query.songid }),
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/mlog/rcmd/feed/list',
  });
};