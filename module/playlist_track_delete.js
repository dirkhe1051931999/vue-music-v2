// 收藏单曲到歌单 从歌单删除歌曲
// /playlist/track/delete?pid=5271999357&ids=186041
module.exports = async (query, request) => {
  query.ids = query.ids || '';
  const data = {
    id: query.id,
    tracks: JSON.stringify(
      query.ids.split(',').map((item) => {
        return { type: 3, id: item };
      })
    ),
  };

  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/playlist/track/delete',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};