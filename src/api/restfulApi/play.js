import _axios from "../axios";
export default {
  // 获取播放列表
  getMusicUrl: (id) =>
    _axios("api/song/url", {
      id
    }),
  // 获取歌词
  getLyric: (id) =>
    _axios("api/lyric", {
      id
    })
};
