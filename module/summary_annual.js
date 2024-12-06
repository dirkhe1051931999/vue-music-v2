// 年度听歌报告2017-2023
// /summary/annual?year=2023
module.exports = (query, request) => {
  const data = {};
  const key = ['2017', '2018', '2019'].indexOf(query.year) > -1 ? 'userdata' : 'data';
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/activity/summary/annual/' + query.year + '/' + key,
  });
};