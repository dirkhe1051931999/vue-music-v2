//热门话题
// /hot/topic
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/act/hot',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};