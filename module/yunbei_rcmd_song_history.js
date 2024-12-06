// 云贝推歌历史记录
// /yunbei/rcmd/song/history
module.exports = (query, request) => {
  const data = {
    page: JSON.stringify({
      size: query.size || 20,
      cursor: query.cursor || '',
    }),
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/yunbei/rcmd/song/history/list',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};