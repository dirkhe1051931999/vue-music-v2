import { loadFavorite, loadPlay } from 'common/scripts/cache';
import { playMode } from 'config/playmode';

const state = {
  singer: {},
  // 播放暂停
  playing: false,
  // 全屏
  fullScreen: false,
  // 播放列表：随机，顺序
  playlist: [],
  // 歌单列表
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  // 当前索引
  currentIndex: -1,
  // 歌单推荐
  desc: {},
  // 排行榜
  rank: {},
  // 搜索历史(初始值本地存储读取)
  searchHistory: [],
  // 播放历史
  playHistory: loadPlay(),
  // 我的收藏
  favoriteList: loadFavorite(),
};
export default state;