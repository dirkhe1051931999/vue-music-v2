// 本地歌曲匹配音乐信息
// /search/match?title=富士山下&album=&artist=陈奕迅&duration=259.21&md5=bd708d006912a09d827f02e754cf8e56
module.exports = (query, request) => {
  let songs = [
    {
      title: query.title || '',
      album: query.album || '',
      artist: query.artist || '',
      duration: query.duration || 0,
      persistId: query.md5,
    },
  ];
  const data = {
    songs: JSON.stringify(songs),
  };
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/search/match/new',
  });
};