<template>
  <div class="play-list">
    <div class="nav">
      <NavBar :title="playListTitle" transparent />
    </div>
    <div class="bg-image" ref="bgImage" :style="bgStyle">
      <div class="bar" ref="bar">
        <div class="play">
          <div class="icon-play"></div>
          <div class="text">播放全部 (共{{ trackCount }}首)</div>
        </div>
        <div class="collect">
          {{ collectCount(subscribedCount) }}
        </div>
      </div>
      <div class="filter" ref="filter"></div>
    </div>
    <div class="bg-layer" ref="layer"></div>
    <div class="list" ref="list">
      <scroll ref="scroll" class="scroll" :data="songs" v-if="songs.length > 0" :probeType="probeType" listenScroll @scroll="scroll">
        <Musiclist :list="songs" @toPlay="toPlay" />
      </scroll>
      <Loading1 v-if="songs.length === 0" class="loading-list" />
    </div>
  </div>
</template>

<script>
import api from 'api/api';
import { catchError } from 'api/catchError';
import { prefixStyle } from 'common/scripts/dom';
import { createSong } from 'common/scripts/song.class';
import moment from 'moment';
import { mapActions, mapGetters, mapMutations } from 'vuex';

const RESERVED_HEIGHT = 72;
const heightMiniPlayer = 60;
const transform = prefixStyle('transform');
export default {
  components: {
    NavBar: () => import('components/navBar/navBar'),
    Scroll: () => import('components/scroll/scroll'),
    Musiclist: () => import('components/musiclist/musiclist'),
  },
  name: '',
  data() {
    return {
      id: 0,
      probeType: 3,
      coverImgUrl: '',
      playListTitle: '',
      updateTime: '',
      songs: [],
      trackCount: 0,
      subscribedCount: '',
      scrollY: 0,
    };
  },
  computed: {
    ...mapGetters(['fullScreen']),
    collectCount() {
      return (count) => {
        const unit = 10000;
        return `+ 收藏 (${parseInt(count / 1000).toFixed(1)}万)`;
      };
    },
    bgStyle() {
      return `background-image:url(${this.coverImgUrl})`;
    },
  },
  watch: {
    scrollY(newY) {
      let scale = 1;
      const percent = Math.abs(newY / this.imageHeight);
      if (newY > 0) {
        scale = 1 + percent;
      }
      this.$refs.bgImage.style[transform] = `scale(${scale})`;
    },
    // 兼容迷你播放器高度
    fullScreen(newFull) {
      if (!newFull && $('.mini-player').height()) {
        this.$refs.list.style.bottom = `${heightMiniPlayer}px`;
        this.$refs.scroll && this.$refs.scroll.refresh();
      }
    },
  },
  methods: {
    scroll(pos) {
      this.scrollY = pos.y;
    },
    async getPlayListDetail() {
      this.id = this.$route.query.id;
      const [error, result] = await catchError(api.getPlayListDetail(this.id));
      if (error) {
        this.$dialog.toast({ mes: '网络异常', timeout: 1000 });
        return;
      }
      if (result.code === 200) {
        const { playlist } = result;
        this.coverImgUrl = playlist.coverImgUrl;
        this.playListTitle = playlist.name;
        this.updateTime = moment(playlist.updateTime).startOf('day').fromNow();
        this.songs = this.normalizeSongs(playlist.tracks, playlist.name);
        this.trackCount = playlist.trackCount;
        this.subscribedCount = playlist.subscribedCount;
        // 兼容迷你播放器高度
        if (!this.fullScreen && $('.mini-player').height()) {
          this.$refs.list.style.bottom = `${heightMiniPlayer}px`;
          this.$refs.scroll && this.$refs.scroll.refresh();
        }
      }
    },
    normalizeSongs(list, album) {
      let ret = [];
      for (let song of list) {
        ret.push(
          createSong({
            id: song.id,
            singer: song.ar,
            name: song.al.name,
            album: album,
            duration: song.dt,
            image: song.al.picUrl,
            url: '',
            lyric: '',
          })
        );
      }
      return ret;
    },
    toPlay(song, index) {
      // 使用vuex存储播放列表
      this.selectPlay({
        list: this.songs,
        index,
      });
      this.setFullScreen(true);
    },
    ...mapActions(['selectPlay']),
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN',
    }),
  },
  created() {
    this.getPlayListDetail();
  },
  mounted() {
    this.imageHeight = this.$refs.bgImage.clientHeight;
    this.minTranslateY = -this.imageHeight + RESERVED_HEIGHT;
    this.$refs.list.style.top = `${this.$refs.bgImage.clientHeight}px`;
    // 发现有迷你播放器，设置bottom
  },
};
</script>

<style scoped lang="scss">
.play-list {
  .nav {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
  }

  .bg-image {
    position: relative;
    top: 0;
    z-index: 50;
    width: 100%;
    height: 560px;
    transform-origin: top;
    background-size: cover;

    .bar {
      border-bottom: solid 1px $border-color;
      position: absolute;
      z-index: 100;
      width: 100%;
      border-radius: 20px 20px 0 0;
      left: 0;
      bottom: -3px;
      height: 80px;
      line-height: 80px;
      display: flex;
      justify-content: flex-start;

      .play {
        background: #ffffff;
        font-size: $font-size-7;
        border-top-left-radius: 20px;
        width: 60%;
        display: flex;
        justify-content: flex-start;

        .icon-play {
          padding-left: 5%;
          display: inline-block;
          line-height: 80px;
          font-size: $font-size-9;
        }

        .text {
          padding-left: 5%;
          text-align: left;
        }
      }

      .collect {
        border-top-right-radius: 20px;
        width: 40%;
        color: #ffffff;
        background: $red;
        text-align: center;
        font-size: $font-size-7;
      }
    }

    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .bg-layer {
    position: relative;
    height: 100%;
    background: #fff;
  }

  .list {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
  }
}
</style>