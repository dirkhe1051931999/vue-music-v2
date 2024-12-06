// 歌曲详情
// /song/detail?ids=347230
module.exports = (query, request) => {
  query.ids = query.ids.split(/\s*,\s*/);
  const data = {
    c: '[' + query.ids.map((id) => '{"id":' + id + '}').join(',') + ']',
    ids: '[' + query.ids.join(',') + ']',
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/v3/song/detail',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};