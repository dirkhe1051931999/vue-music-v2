// 歌手
export const singer = (state) => state.singer;
// 播放状态
export const playing = (state) => state.playing;
// 是否全屏
export const fullScreen = (state) => state.fullScreen;
// 播放列表：随机，顺序
export const playlist = (state) => state.playlist;
// 歌单列表
export const sequenceList = (state) => state.sequenceList;
// 播放模式
export const mode = (state) => state.mode;
// 当前播放的歌曲的索引
export const currentIndex = (state) => state.currentIndex;
// 当前播放的歌曲
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {};
};
// 歌曲推荐
export const desc = (state) => state.desc;
// 排行榜
export const rank = (state) => state.rank;
// 搜索历史
export const searchHistory = (state) => state.searchHistory;
// 播放历史
export const playHistory = (state) => state.playHistory;
// 收藏
export const favoriteList = (state) => state.favoriteList;
