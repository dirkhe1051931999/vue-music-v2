import storage from "good-storage";
const PLAY_KEY = "__PLAYKEY__";
const PLAY_MAX_LENGTH = 50;
const FAVORITE_KEY = "__FAVORITEKEY__";
const FAVORITE_MAX_LENGTH = 50;
// 内部方法：往数组插数据
function insertArray(arr, val, compare, maxLen) {
  // 查找数组是否有当前元素
  const index = arr.findIndex(compare);
  // 没有就返回
  if (index == 0) {
    return;
  }
  // 如果有，先删除重复数据
  if (index > 0) {
    arr.splice(index, 1);
  }
  // 插入数组头部
  arr.unshift(val);
  // 设置最大长度限制
  if (maxLen && arr.length > maxLen) {
    arr.pop();
  }
}
// 内部方法：删除数据数据
function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare);
  if (index > -1) {
    arr.splice(index, 1);
  }
}
// 保存播放列表
export function savePlay(song) {
  // 在localStorage中获取播放列表，用空数组兜底
  let songs = storage.get(PLAY_KEY, []);
  // 插入播放列表中
  insertArray(
    songs,
    song,
    (item) => {
      return item.id === song.id;
    },
    PLAY_MAX_LENGTH
  );
  storage.set(PLAY_KEY, songs);
  return songs;
}
// 收藏
export function saveFavorite(song) {
  let songs = storage.get(FAVORITE_KEY, []);
  insertArray(
    songs,
    song,
    (item) => {
      return item.id == song.id;
    },
    FAVORITE_MAX_LENGTH
  );
  storage.set(FAVORITE_KEY, songs);
  return songs;
}
// 取消收藏
export function deleteFavorite(song) {
  let songs = storage.get(FAVORITE_KEY, []);
  deleteFromArray(songs, (item) => {
    return item.id == song.id;
  });
  storage.set(FAVORITE_KEY, songs);
  return songs;
}
// 读取我的收藏
export function loadFavorite() {
  return storage.get(FAVORITE_KEY, []);
}
// 读取播放历史
export function loadPlay() {
  return storage.get(PLAY_KEY, []);
}
