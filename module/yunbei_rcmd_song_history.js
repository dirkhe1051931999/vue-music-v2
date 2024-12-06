// 云贝推歌历史记录
// /yunbei/rcmd/song/history
module.exports = (query, request) => {
  const data = {
    page: JSON.stringify({
      size: query.size || 20,
      cursor: query.cursor || '',
    }),
  };
  return request('POST', `https://music.163.com/api/yunbei/rcmd/song/history/list`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};