// 云村星评馆 - 简要评论列表
// /starpick/comments/summary
module.exports = (query, request) => {
  const data = {
    cursor: JSON.stringify({
      offset: 0,
      blockCodeOrderList: ['HOMEPAGE_BLOCK_NEW_HOT_COMMENT'],
      refresh: true,
    }),
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/homepage/block/page',
  });
};