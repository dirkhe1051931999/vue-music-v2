// 搜索歌手
// /ugc/artist/search?keyword=毛

module.exports = (query, request) => {
  const data = {
    keyword: query.keyword,
    limit: query.limit || 40,
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/rep/ugc/artist/search',
  });
};