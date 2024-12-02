export class Lyric {
  constructor(data) {
    this.data = data;
    this.lrc = data['lrc']['lyric'];
    this.tlyric = data['tlyric']['lyric'];
    this.lrcMap = this.getLyricMap(this.lrc);
    this.finalLrcMap = this.convertProp(Object.assign({}, this.lrcMap));
    this.tlyricMap = this.getLyricMap(this.tlyric);
    this.finalTlyricMap = this.convertProp(Object.assign({}, this.tlyricMap));
  }

  // 以对象形式格式化歌词，{[00:12.570]: "歌词"}
  getLyricMap(lrc) {
    let key, value, sIdx, eIdx, nsIdx;
    let ret = {};
    if (!lrc || typeof lrc !== 'string') return ret;
    while (lrc) {
      sIdx = lrc.indexOf('[');
      eIdx = lrc.indexOf(']') + 1;
      if (sIdx !== -1 && eIdx !== -1) {
        key = lrc.slice(sIdx, eIdx);
        advance(eIdx);
        nsIdx = lrc.indexOf('[');
        value = lrc.slice(0, nsIdx);
        ret[key] = value.trim();
        advance(nsIdx);
      } else {
        break;
      }
    }

    function advance(n) {
      lrc = lrc.substring(n);
    }

    return ret;
  }

  // 再次格式化歌词，{12570: "歌词"}，过滤了空串
  convertProp(obj) {
    Object.keys(obj).forEach((str) => {
      if (!obj[str]) {
        delete obj[str];
      } else {
        let prop = f(str);
        obj[prop] = obj[str];
        delete obj[str];
      }
    });

    function f(str) {
      str = str.match(/^\[(\d+):(\d+)\.(\d+)/);
      return Number(str[1]) * 60 * 1000 + Number(str[2]) * 1000 + Number(str[3]);
    }

    return obj;
  }

  // 获取当前歌词
  getCurPlayLyric(audioCurTime) {
    let audioCurTimeMs = audioCurTime * 1000;
    let arrTime = Object.keys(this.finalLrcMap);
    let i = 0,
      len = arrTime.length,
      idx;
    let hasTranslate = Object.keys(this.finalTlyricMap).length > 0;
    if (audioCurTimeMs === 0) {
      return g.call(this, arrTime[0]);
    }
    if (audioCurTimeMs >= Number(arrTime[len - 1])) {
      return g.call(this, arrTime[len - 1]);
    }
    for (; i < len; i++) {
      if (audioCurTimeMs >= Number(arrTime[i - 1]) && audioCurTimeMs < Number(arrTime[i])) {
        idx = i - 1;
        break;
      }
    }
    return g.call(this, arrTime[idx]);

    function g(prop) {
      return hasTranslate ? v(this.finalLrcMap[prop]) + '\n' + v(this.finalTlyricMap[prop]) : v(this.finalLrcMap[prop]);
    }

    function v(val) {
      return typeof val === 'undefined' ? '' : val;
    }
  }
}