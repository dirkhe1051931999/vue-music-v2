// dj今日优选
// /dj/today/perfered
module.exports = (query, request) => {
  const data = {
    page: query.page || 0,
  };
  return request('POST', `https://music.163.com/weapi/djradio/home/today/perfered`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};