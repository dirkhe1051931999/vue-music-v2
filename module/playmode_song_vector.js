// 云随机播放
// /playmode/song/vector/get?ids=[123,456]
module.exports = (query, request) => {
  const data = {
    ids: query.ids,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/playmode/song/vector/get',
  });
};