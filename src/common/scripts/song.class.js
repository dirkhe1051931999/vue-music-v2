export default class Song {
  constructor({ id, singer, name, album, duration, image, url, lyric }) {
    this.id = id;
    this.singer = singer;
    this.name = name;
    this.album = album;
    this.duration = duration;
    this.image = image;
    this.url = url;
    this.lyric = lyric;
  }
}
export function createSong(musicData) {
  return new Song({
    id: musicData.id,
    singer: filterSinger(musicData.singer),
    name: musicData.name,
    album: musicData.album,
    duration: filterDuration(musicData.duration),
    image: musicData.image,
    url: musicData.url,
    lyric: musicData.lyric
  });
}
function filterSinger(singer) {
  let ret = [];
  if (!singer) {
    return "";
  }
  singer.forEach((s) => {
    ret.push(s.name);
  });
  return ret.join("/");
}
function filterDuration(duration) {
  return duration / 1000;
}
