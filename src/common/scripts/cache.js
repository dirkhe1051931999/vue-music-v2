import storage from 'good-storage';

const STORAGE_KEYS = {
  PLAY: '__PLAYKEY__',
  FAVORITE: '__FAVORITEKEY__',
};

const MAX_LENGTH = {
  PLAY: 50,
  FAVORITE: 50,
};

// 数组操作工具方法
const arrayUtils = {
  insert(arr, val, compare, maxLen) {
    const index = arr.findIndex(compare);
    if (index === 0) return;
    if (index > 0) arr.splice(index, 1);
    arr.unshift(val);
    if (maxLen && arr.length > maxLen) arr.pop();
  },

  delete(arr, compare) {
    const index = arr.findIndex(compare);
    if (index > -1) arr.splice(index, 1);
  },
};

// 存储操作工具方法
const storageUtils = {
  save(key, song, maxLen) {
    const songs = storage.get(key, []);
    arrayUtils.insert(songs, song, (item) => item.id === song.id, maxLen);
    storage.set(key, songs);
    return songs;
  },

  load(key) {
    return storage.get(key, []);
  },
};

// 导出方法
export const savePlay = (song) => storageUtils.save(STORAGE_KEYS.PLAY, song, MAX_LENGTH.PLAY);

export const saveFavorite = (song) => storageUtils.save(STORAGE_KEYS.FAVORITE, song, MAX_LENGTH.FAVORITE);

export const deleteFavorite = (song) => {
  const songs = storage.get(STORAGE_KEYS.FAVORITE, []);
  arrayUtils.delete(songs, (item) => item.id === song.id);
  storage.set(STORAGE_KEYS.FAVORITE, songs);
  return songs;
};

export const loadFavorite = () => storageUtils.load(STORAGE_KEYS.FAVORITE);

export const loadPlay = () => storageUtils.load(STORAGE_KEYS.PLAY);