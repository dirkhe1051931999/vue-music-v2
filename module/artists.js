// 歌手单曲
// /artists?id=6452
module.exports = (query, request) => {
  return request(
    'POST',
    ``,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: `/weapi/v1/artist/${query.id}`,
    }
  );
};