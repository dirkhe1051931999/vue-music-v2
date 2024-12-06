// 每日推荐歌曲-不感兴趣
// /recommend/songs/dislike?id=168091
module.exports = (query, request) => {
  const data = {
    resId: query.id, // 日推歌曲id
    resType: 4,
    sceneType: 1,
  };
  return request('POST', `https://music.163.com/api/v2/discovery/recommend/dislike`, data, { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy });
};