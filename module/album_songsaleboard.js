// 数字专辑&数字单曲-榜单
// /album/songsaleboard?type=year&year=2020&albumType=0
module.exports = (query, request) => {
  let data = {
    albumType: query.albumType || 0, //0为数字专辑,1为数字单曲
  };
  const type = query.type || 'daily'; // daily,week,year,total
  if (type === 'year') {
    data = {
      ...data,
      year: query.year,
    };
  }
  return request('POST', '', data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: `/weapi/feealbum/songsaleboard/${type}/type`,
  });
};