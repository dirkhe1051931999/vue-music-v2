// 听歌打卡
// /scrobble?id=518066366&sourceid=36780169&time=291
module.exports = (query, request) => {
  const data = {
    logs: JSON.stringify([
      {
        action: 'play',
        json: {
          download: 0,
          end: 'playend',
          id: query.songid,
          sourceId: query.sourceid,
          time: query.time,
          type: 'song',
          wifi: 0,
          source: 'list',
          mainsite: 1,
          content: '',
        },
      },
    ]),
  };
  return request('POST', '', data, {
    crypto: 'weapi',
    url: '/weapi/feedback/weblog',
    cookie: query.cookie,
    proxy: query.proxy,
  });
};