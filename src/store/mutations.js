import * as types from './mutation-type';

const mutations = {
  // 设置歌手列表
  [types.SET_SINGER](state, singer) {
    state.singer = singer;
  },
  // 设置当前是否播放
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag;
  },
  // 设置当前是否全屏
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag;
  },
  // 设置当前播放列表：随机，顺序
  [types.SET_PLAYLIST](state, list) {
    state.playlist = list;
  },
  // 设置当前播放列表
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list;
  },
  // 设置当前播放模式
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode;
  },
  // 设置当前播放的索引
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index;
  },
  // 设置当前歌单推荐
  [types.SET_DESC](state, desc) {
    state.desc = desc;
  },
  // 设置当前排行榜
  [types.SET_RANK](state, rank) {
    state.rank = rank;
  },
  // 设置当前搜索历史
  [types.SET_SEARCH_HISTORY](state, searchHistory) {
    state.searchHistory = searchHistory;
  },
  // 设置当前搜索历史
  [types.SET_PLAY_HISTORY](state, playHistory) {
    state.playHistory = playHistory;
  },
  // 设置当前我的收藏
  [types.SET_FAVORITE_LIST](state, favoriteList) {
    state.favoriteList = favoriteList;
  },
};
export default mutations;