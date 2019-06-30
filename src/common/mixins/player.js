import { mapGetters, mapMutations, mapActions } from "vuex";
import { playMode } from "config/playmode";
import { shuffle } from "common/scripts/util";

export const playerMixin = {
  computed: {
    // 播放模式icon
    iconMode() {
      return this.mode == playMode.sequence ? "icon-sequence" : this.mode == playMode.loop ? "icon-loop" : "icon-random";
    },
    ...mapGetters(["sequenceList", "playlist", "currentSong", "mode", "favoriteList"])
  },
  methods: {
    // 更改播放模式
    changeMode() {
      const mode = (this.mode + 1) % 3;
      this.setPlayMode(mode);
      let list = null;
      if (mode == playMode.random) {
        list = shuffle(this.sequenceList);
      } else {
        list = this.sequenceList;
      }
      // 点击播放模式，当前歌曲不变
      this.resetCurrentIndex(list);
      this.setPlayList(list);
    },
    // 当playlist改变时，当前的currentSong不变
    resetCurrentIndex(list) {
      let index = list.findIndex((item) => {
        return item.id === this.currentSong.id;
      });
      this.setCurrentIndex(index);
    },
    toggleFavorite(song) {},
    getFavoriteIcon(song) {},
    isFavorite(song) {},
    // 更改vuex状态
    ...mapMutations({
      setPlayingState: "SET_PLAYING_STATE",
      setCurrentIndex: "SET_CURRENT_INDEX",
      setPlayMode: "SET_PLAY_MODE",
      setPlayList: "SET_PLAYLIST"
    })
  }
};
