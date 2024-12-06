// 曲风-歌曲
// /style/song?tagId=1000
module.exports = (query, request) => {
  const data = {
    cursor: query.cursor || 0,
    size: query.size || 20,
    tagId: query.tagId,
    sort: query.sort || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/style-tag/home/song',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};