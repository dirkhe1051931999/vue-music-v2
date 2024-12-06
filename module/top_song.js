// 新歌速递
// /top/song
module.exports = (query, request) => {
  const data = {
    areaId: query.type || 0, // 全部:0 华语:7 欧美:96 日本:8 韩国:16
    limit: query.limit || 100,
    offset: query.offset || 0,
    total: true,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/v1/discovery/new/songs',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};