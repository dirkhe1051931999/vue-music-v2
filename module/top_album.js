// 新碟上架
// /top/album?offset=0&limit=30&year=2019&month=6
module.exports = (query, request) => {
  const date = new Date();
  const data = {
    area: query.area || 'ALL', // //ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
    limit: query.limit || 50,
    offset: query.offset || 0,
    type: query.type || 'new',
    year: query.year || date.getFullYear(),
    month: query.month || date.getMonth() + 1,
    total: false,
    rcmd: true,
  };
  return request('POST', `https://music.163.com/weapi/album/new`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};