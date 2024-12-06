// 收藏与取消收藏MV
// /mv/sub?mvId=5436712&t=1
module.exports = (query, request) => {
  query.t = query.t === 1 ? 'sub' : 'unsub';
  const data = {
    mvId: query.mvid,
    mvIds: '["' + query.mvid + '"]',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: `/weapi/mv/${query.t}`,
    cookie: query.cookie,
    proxy: query.proxy,
  });
};