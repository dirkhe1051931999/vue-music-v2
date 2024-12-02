export default class Song {
  constructor({ id, singer, name, album, duration, image, url, lyric }) {
    Object.assign(this, {
      id,
      singer,
      name,
      album,
      duration,
      image,
      url,
      lyric,
    });
  }

  static create(musicData) {
    return new Song({
      ...musicData,
      singer: Song.formatSinger(musicData.singer),
      duration: Song.formatDuration(musicData.duration),
    });
  }

  static formatSinger(singer) {
    return singer ? singer.map((s) => s.name).join('/') : '';
  }

  static formatDuration(duration) {
    return duration / 1000;
  }
}

export const createSong = Song.create;