// 云盘歌曲删除
// /user/cloud/del?ids=[431305]
module.exports = (query, request) => {
  const data = {
    songIds: [query.id],
  };
  return request('POST', `https://music.163.com/weapi/cloud/del`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};