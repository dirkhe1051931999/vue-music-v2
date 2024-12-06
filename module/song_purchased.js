// 已购单曲
// /song/purchased
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', `https://music.163.com/api/single/mybought/song/list`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};