// 歌手相关视频
// /artist/video?id=2116
module.exports = (query, request) => {
  const data = {
    artistId: query.id,
    page: JSON.stringify({
      size: query.size || 10,
      cursor: query.cursor || 0,
    }),
    tab: 0,
    order: query.order || 0,
  };
  return request('POST', ``, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/weapi/mlog/artist/video',
  });
};