// 曲风-歌单
// /style/playlist?tagId=1&cursor=0&size=20&sort=0
module.exports = (query, request) => {
  const data = {
    cursor: query.cursor || 0,
    size: query.size || 20,
    tagId: query.tagId,
    sort: 0,
  };
  return request('POST', `https://music.163.com/api/style-tag/home/playlist`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};