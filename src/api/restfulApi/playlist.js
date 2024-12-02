import _axios from '../axios';
export default {
  // 获取播放列表
  getPlayListDetail: (id) =>
    _axios('/playlist/detail', {
      id,
      _: +new Date(),
    }),
};