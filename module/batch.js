// 批量请求接口
// /batch?/api/v2/banner/get={"clientType":"pc"}
module.exports = (query, request) => {
  const data = {
    e_r: true,
  };
  Object.keys(query).forEach((i) => {
    if (/^\/api\//.test(i)) {
      data[i] = query[i];
    }
  });
  return request('POST', '', data, { crypto: 'eapi', proxy: query.proxy, url: '/api/batch', cookie: query.cookie });
};