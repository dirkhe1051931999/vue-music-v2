function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateIPSegment() {
  return getRandomInt(1, 255);
}

module.exports = {
  toBoolean(val) {
    if (val === '') return val;
    return val === 'true' || val === '1';
  },
  generateRandomChineseIP() {
    const chinaIPPrefixes = ['116.25', '116.76', '116.77', '116.78'];
    const randomPrefix = chinaIPPrefixes[Math.floor(Math.random() * chinaIPPrefixes.length)];
    return `${randomPrefix}.${generateIPSegment()}.${generateIPSegment()}`;
  },
  cookieToJson(cookie) {
    if (!cookie) return {};
    let cookieArr = cookie.split(';');
    let obj = {};
    cookieArr.forEach((i) => {
      let arr = i.split('=');
      if (arr.length === 2) obj[arr[0].trim()] = arr[1].trim();
    });
    return obj;
  },
  cookieJsonToString(cookie) {
    return Object.keys(cookie)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(cookie[key])}`)
      .join('; ');
  },
  getRandomFromList(list) {
    return list[Math.floor(Math.random() * list.length)];
  },
  getURI(url) {
    try {
      const urlObj = new URL(url);
      return urlObj.pathname;
    } catch (e) {
      return '';
    }
  },
  reverseObject(obj) {
    return Object.fromEntries(Object.entries(obj).reverse());
  },
};