import _axios from '../axios';
export default {
  // 获取播放列表
  getMusicUrl: (id) =>
    _axios('/song/url', {
      id,
    }),
  // 获取歌词
  getLyric: (id) =>
    _axios('/lyric', {
      id,
    }),
};