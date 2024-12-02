import * as types from './mutation-type';
import { playMode } from 'config/playmode';
import { shuffle } from 'common/scripts/util';
import { savePlay, saveFavorite, deleteFavorite } from 'common/scripts/cache';
// 内部方法
// 返回当前歌曲是否在列表内，在就返回当前索引，否则返回false
function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id;
  });
}
// 设置当前播放列表
export const selectPlay = function ({ commit, state }, { list, index }) {
  // 暴力打断引用关系
  list = JSON.parse(JSON.stringify(list));
  // 先设置播放列表
  commit(types.SET_SEQUENCE_LIST, list);
  // 如果是随机
  if (state.mode === playMode.random) {
    // 那么就打乱数组
    let randomList = shuffle(list);
    // 设置当前播放列表：随机，顺序
    commit(types.SET_PLAYLIST, randomList);
    // 获取当前歌曲的索引
    index = findIndex(randomList, list[index]);
  } else {
    // 如果不是随机
    commit(types.SET_PLAYLIST, list);
  }
  // 设置当前播放可取的索引
  commit(types.SET_CURRENT_INDEX, index);
  // 设置是否全屏
  commit(types.SET_FULL_SCREEN, true);
  // 设置播放状态
  commit(types.SET_PLAYING_STATE, true);
};
// 播放控制台的播放模式
export const randomPlay = function ({ commit }, { list }) {
  // 设置播放模式
  commit(types.SET_PLAY_MODE, playMode.random);
  // 设置当前播放列表
  commit(types.SET_SEQUENCE_LIST, list);
  // 打乱数组
  let randomList = shuffle(list);
  // 设置随机播放列表
  commit(types.SET_PLAYLIST, randomList);
  // 设置当前索引
  commit(types.SET_CURRENT_INDEX, 0);
  // 设置全屏
  commit(types.SET_FULL_SCREEN, true);
  // 设置播放状态
  commit(types.SET_PLAYING_STATE, true);
};
// 设置播放历史
export const savePlayHistory = function ({ commit }, song) {
  commit(types.SET_PLAY_HISTORY, savePlay(song));
};
// 往播放列表插入歌曲
export const insertSong = function ({ commit, state }, song) {
  // 获取播放列表，有可能是随机的播放列表
  let playlist = state.playlist.slice();
  // 获取播放列表，不是随机的
  let sequenceList = state.sequenceList.slice();
  // 设置当前播放索引
  let currentIndex = state.currentIndex;
  // 设置当前播放的歌曲
  let currentSong = playlist[currentIndex];
  // 查看当前列表是否有插入的歌曲
  let fpIndex = findIndex(playlist, song);
  // 因为是插入的歌曲，所以当前播放的索引要+1
  currentIndex++;
  // 往列表中插入歌曲
  playlist.splice(currentIndex, 0, song);
  // 如果列表中有
  if (fpIndex > -1) {
    // 并且当前插入的歌曲的索引大于已有的重复的歌曲，
    if (currentIndex > fpIndex) {
      // 删除已有的重复的歌曲
      playlist.splice(fpIndex, 1);
      // 当前的索引要-1
      currentIndex--;
    } else {
      // 否则就直接插入就行
      playlist.splice(fpIndex + 1, 1);
    }
  }
  // 获取不包含随机的播放列表的当前播放歌曲的索引
  let currentSIndex = findIndex(sequenceList, currentSong) + 1;
  // 获取插入的歌曲在不包含随机列表的索引
  let fsIndex = findIndex(sequenceList, song);
  // 在列表中插入歌曲
  sequenceList.splice(currentSIndex, 0, song);
  // 如果插入的歌曲在不包含随机列表中存在
  if (fsIndex > -1) {
    // 并且播放列表的索引大于已有重复的歌曲
    if (currentSIndex > fsIndex) {
      // 删除已有的重复歌曲
      sequenceList.splice(fsIndex, 1);
    } else {
      // 否则就直接插入就行
      sequenceList.splice(fsIndex + 1, 1);
    }
  }
  // 设置播放列表，包含随机
  commit(types.SET_PLAYLIST, playlist);
  // 设置播放列表
  commit(types.SET_SEQUENCE_LIST, sequenceList);
  // 设置当前播放歌曲的索引
  commit(types.SET_CURRENT_INDEX, currentIndex);
  // 设置全屏
  commit(types.SET_FULL_SCREEN, true);
  // 设置播放模式
  commit(types.SET_PLAYING_STATE, true);
};
// 删除播放列表的数据
export const deleteSong = function ({ commit, state }, song) {
  // 包含随机的播放列表
  let playlist = state.playlist.slice();
  // 不包含随机的播放列表
  let sequenceList = state.sequenceList.slice();
  // 当前播放歌曲的索引
  let currentIndex = state.currentIndex;
  // 包含随机的播放列表：删除的歌曲的索引
  let pIndex = findIndex(playlist, song);
  // 删除
  playlist.splice(pIndex, 1);
  // 不包含随机的播放列表：删除的歌曲的索引
  let sIndex = findIndex(sequenceList, song);
  // 删除
  sequenceList.splice(sIndex, 1);
  // 如果当前播放的的歌曲在删掉歌曲之后 或者 删除去最后一首歌
  if (currentIndex > pIndex || currentIndex === playlist.length) {
    currentIndex--;
  }
  // 设置包含随机的播放列表
  commit(types.SET_PLAYLIST, playlist);
  // 设置不包含随机的播放列表
  commit(types.SET_SEQUENCE_LIST, sequenceList);
  // 设置当前播放歌曲的索引
  commit(types.SET_CURRENT_INDEX, currentIndex);
  // 删除了列表中最后一个歌，把播放状态改为停止
  if (!playlist.length) {
    commit(types.SET_PLAYING_STATE, false);
  } else {
    // 如果列表还有其他歌，就把播放状态改为播放
    commit(types.SET_PLAYING_STATE, true);
  }
};
// 播放列表全部删除
export const deleteSongList = function ({ commit }) {
  commit(types.SET_PLAYLIST, []);
  commit(types.SET_SEQUENCE_LIST, []);
  commit(types.SET_CURRENT_INDEX, -1);
  commit(types.SET_PLAYING_STATE, false);
};
export const saveFavoriteList = function ({ commit }, song) {
  commit(types.SET_FAVORITE_LIST, saveFavorite(song));
};
export const deleteFavoriteList = function ({ commit }, song) {
  commit(types.SET_FAVORITE_LIST, deleteFavorite(song));
};