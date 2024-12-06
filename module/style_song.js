// 曲风-歌曲
// /style/song?tagId=1000
module.exports = (query, request) => {
  const data = {
    cursor: query.cursor || 0,
    size: query.size || 20,
    tagId: query.tagId,
    sort: query.sort || 0,
  };
  return request('POST', `https://music.163.com/api/style-tag/home/song`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};