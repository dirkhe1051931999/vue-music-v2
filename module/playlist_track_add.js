// 收藏视频到视频歌单
// /playlist/track/add?pid=5271999357&ids=186041
module.exports = async (query, request) => {
  query.ids = query.ids || '';
  const data = {
    id: query.pid,
    tracks: JSON.stringify(
      query.ids.split(',').map((item) => {
        return { type: 3, id: item };
      })
    ),
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/playlist/track/add',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};