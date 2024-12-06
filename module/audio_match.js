// 听歌识曲
module.exports = async (query, request) => {
  const res = await request({
    method: 'GET',
    url: `https://interface.music.163.com/api/music/audio/match?sessionId=0123456789abcdef&algorithmCode=shazam_v2&duration=${
      query.duration
    }&rawdata=${encodeURIComponent(query.audioFP)}&times=1&decrypt=1`,
    data: null,
  });
  return {
    status: 200,
    body: {
      code: 200,
      data: res.data.data,
    },
  };
};