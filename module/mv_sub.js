// 收藏与取消收藏MV
// /mv/sub?mvId=5436712&t=1
module.exports = (query, request) => {
  query.t = query.t === 1 ? 'sub' : 'unsub';
  const data = {
    mvId: query.mvid,
    mvIds: '["' + query.mvid + '"]',
  };
  return request('POST', `https://music.163.com/weapi/mv/${query.t}`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};