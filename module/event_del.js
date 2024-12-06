// 删除动态
// /event/del?evId=6712917601
module.exports = (query, request) => {
  const data = {
    id: query.evId,
  };
  return request('POST', `https://music.163.com/eapi/event/delete`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};