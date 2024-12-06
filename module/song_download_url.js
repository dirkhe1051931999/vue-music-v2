// 获取客户端歌曲下载链接
// /song/download/url?id=347230
module.exports = (query, request) => {
  const data = {
    id: query.id,
    br: parseInt(query.br || 999000),
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/song/enhance/download/url',
  });
};