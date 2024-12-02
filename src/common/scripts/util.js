const utils = {
  // 获取指定范围内的随机整数
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  // 数组随机洗牌
  shuffle(arr) {
    const copy = [...arr];
    for (let i = 0; i < copy.length; i++) {
      const j = this.getRandomInt(0, i);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  },

  // 防抖函数
  debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  },

  // 时间格式化
  formatTime(interval) {
    interval = Math.floor(interval);
    const minute = Math.floor(interval / 60);
    const seconds = interval % 60;
    return `${minute.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  },
};

export const { getRandomInt, shuffle, debounce, formatTime } = utils;