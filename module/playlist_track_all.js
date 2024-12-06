// 获取歌单所有歌曲
//  /playlist/track/all?id=7044354223&limit=10

module.exports = (query, request) => {
  const data = {
    id: query.id,
    n: 100000,
    s: query.s || 8,
  };
  //不放在data里面避免请求带上无用的数据
  let limit = parseInt(query.limit) || Infinity;
  let offset = parseInt(query.offset) || 0;

  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/v6/playlist/detail',
  }).then((res) => {
    let trackIds = res.body.playlist.trackIds;
    let idsData = {
      c:
        '[' +
        trackIds
          .slice(offset, offset + limit)
          .map((item) => '{"id":' + item.id + '}')
          .join(',') +
        ']',
    };

    return request('POST', '', idsData, {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/v3/song/detail',
    });
  });
};