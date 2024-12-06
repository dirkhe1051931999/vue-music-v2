// 付费电台
// /dj/paygift?limit=30&offset=0
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 30,
    offset: query.offset || 0,
  };
  return request('POST', `https://music.163.com/weapi/djradio/home/paygift/list?_nmclfl=1`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};