// 听歌排行
// /user/record?uid=32953014
module.exports = (query, request) => {
  const data = {
    uid: query.uid,
    type: query.type || 1, // 1: 最近一周, 0: 所有时间
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/v1/play/record',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};