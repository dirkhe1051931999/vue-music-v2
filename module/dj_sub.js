// 订阅与取消电台
// /dj/sub?rid=336355127&t=1
module.exports = (query, request) => {
  query.t = query.t === 1 ? 'sub' : 'unsub';
  const data = {
    id: query.rid,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/djradio/${query.t}',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};