const { cookieToJson } = require('../util/index');
module.exports = (query, request) => {
  const uri = query.uri;
  let data = {};
  try {
    data = typeof query.data === 'string' ? JSON.parse(query.data) : query.data || {};
    if (typeof data.cookie === 'string') {
      data.cookie = cookieToJson(data.cookie);
      query.cookie = data.cookie;
    }
  } catch (e) {
    data = {};
  }

  const crypto = query.crypto || '';

  return request('POST', '', data, {
    crypto,
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
    url: uri,
  });
};