// 电台节目列表
// /dj/program?rid=336355127&limit=4
const { toBoolean } = require('../util');
module.exports = (query, request) => {
  const data = {
    radioId: query.rid,
    limit: query.limit || 30,
    offset: query.offset || 0,
    asc: toBoolean(query.asc),
  };
  console.log(toBoolean(query.asc));
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/dj/program/byradio',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};