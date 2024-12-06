// 歌单导入 - 元数据/文字/链接导入
// /playlist/import/name/task/create
module.exports = (query, request) => {
  let data = {
    importStarPlaylist: query.importStarPlaylist || false, // 导入我喜欢的音乐
  };

  if (query.local) {
    // 元数据导入
    let local = JSON.parse(query.local);
    let multiSongs = JSON.stringify(
      local.map(function (e) {
        return {
          songName: e.name,
          artistName: e.artist,
          albumName: e.album,
        };
      })
    );
    data = {
      ...data,
      multiSongs: multiSongs,
    };
  } else {
    let playlistName = query.playlistName || '导入音乐 '.concat(new Date().toLocaleString()); // 歌单名称
    let songs = '';
    if (query.text) {
      // 文字导入
      songs = JSON.stringify([
        {
          name: playlistName,
          type: '',
          url: encodeURI('rpc://playlist/import?text='.concat(query.text)),
        },
      ]);
    }

    if (query.link) {
      // 链接导入
      let link = JSON.parse(query.link);
      songs = JSON.stringify(
        link.map(function (e) {
          return { name: playlistName, type: '', url: encodeURI(e) };
        })
      );
    }
    data = {
      ...data,
      playlistName: playlistName,
      createBusinessCode: undefined,
      extParam: undefined,
      taskIdForLog: '',
      songs: songs,
    };
  }
  return request('POST', '', data, {
    crypto: 'eapi',
    cookie: query.cookie,
    proxy: query.proxy,
    url: '/api/playlist/import/name/task/create',
  });
};