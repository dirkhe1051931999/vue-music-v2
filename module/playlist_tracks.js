// 收藏单曲到歌单 从歌单删除歌曲
// /playlist/tracks?op=add&pid=24381616&tracks=347231
module.exports = async (query, request) => {
  const tracks = query.tracks.split(',');
  const data = {
    op: query.op, // del,add
    pid: query.pid, // 歌单id
    trackIds: JSON.stringify(tracks), // 歌曲id
    imme: 'true',
  };

  try {
    const res = await request('POST', '', data, {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      url: '/api/playlist/manipulate/tracks',
    });
    return {
      status: 200,
      body: {
        ...res,
      },
    };
  } catch (error) {
    if (error.body.code === 512) {
      return request(
        'POST',
        '',
        {
          op: query.op, // del,add
          pid: query.pid, // 歌单id
          trackIds: JSON.stringify([...tracks, ...tracks]),
          imme: 'true',
        },
        {
          crypto: 'eapi',
          cookie: query.cookie,
          proxy: query.proxy,
          url: '/api/playlist/manipulate/tracks',
        }
      );
    } else {
      return {
        status: 200,
        body: error.body,
      };
    }
  }
};