<template>
  <div class="player" v-show="playlist.length > 0">
    <!-- 全屏播放器 -->
    <div class="normal-player" v-show="fullScreen">
      <!-- 播放器背景 -->
      <div class="background">
        <img
          v-lazy="
            'http://p2.music.126.net/aZCB4r2rAV_4SfgRirPK6g==/109951163112303620.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0'
          "
          width="100%"
          height="100%"
        />
      </div>
      <!-- 标题区域 -->
      <NavBar
        :title="`${currentSong.name} - ${currentSong.singer}`"
        transparent
        listenBack
        @navBack="navBack"
        :icon="'icon-arrow-bottom'"
        class="top nowrap"
      />
      <!-- 中间区域 -->
      <div class="middle">
        <!--唱片区域-->
        <div class="middle-l" ref="middleL">
          <div class="cd-wrapper" ref="cdWrapper">
            <div class="cd" :class="cdStateClass">
              <Loading1
                ref="cdImageLoading"
                style="display:none"
                class="loading"
              />
              <img :src="currentSong.image" ref="cdImage" />
            </div>
          </div>
        </div>
        <!-- 歌词区域 -->
        <div class="middle-r"></div>
      </div>
      <!-- 底部歌曲操作区域 -->
      <div class="bottom" ref="bottom">
        <div class="progress-wrapper">
          <span class="time time-l">{{ formatTime(nowTime) }}</span>
          <div class="progress-bar-wrapper">
            <progressBar
              :percent="percent"
              @percentChange="onPercentBarChange"
            />
          </div>
          <span class="time time-r">{{ formatTime(allTime) }}</span>
        </div>
        <div class="operators">
          <div class="icon i-left" @click.stop="changeMode">
            <i :class="modeIcon"></i>
          </div>
          <div class="icon i-left" :class="disableClass">
            <i class="icon-prev" @click.stop="prev"></i>
          </div>
          <div class="icon i-center" :class="disableClass">
            <i :class="playIcon" @click.stop="togglePlay"></i>
          </div>
          <div class="icon i-right" :class="disableClass">
            <i class="icon-next" @click.stop="next"></i>
          </div>
          <div class="icon i-right">
            <i
              class="icon"
              @click.stop="toggleFavorite"
              :class="favoriteIcon"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 迷你播放器 -->
    <div class="mini-player" v-show="!fullScreen" @click="open" ref="mini">
      <div class="icon">
        <img
          width="40"
          height="40"
          :src="currentSong.image"
          :class="cdStateClass"
        />
      </div>
      <div class="text">
        <h2 class="name nowrap" v-html="currentSong.name"></h2>
        <p class="desc nowrap" v-html="currentSong.singer"></p>
      </div>
      <div class="control">
        <i :class="miniIcon" @click.stop="togglePlay" class="icon-mini"></i>
      </div>
      <div class="control" @click.stop="showPlaylist">
        <i class="icon-playlist"></i>
      </div>
    </div>
    <Loading1 class="loading" v-if="!Object.keys(this.currentSong).length" />
    <audio
      ref="audio"
      @canplay="ready"
      @error="error"
      @timeupdate="updateTime"
      @ended="end"
    ></audio>
    <!--播放列表-->
    <div class="currentPlayList" v-show="showCurrentPlayList">
      <div
        class="mask"
        @click="showCurrentPlayList = false"
        @touchstart="showCurrentPlayList = false"
      ></div>
      <div class="wrap">
        <CurrentPlayList
          :list="playlist"
          :mode="mode"
          @changeMode="changeMode"
          @toPlay="currentPlayListPlay"
          :currentIndex="currentIndex"
        />
      </div>
    </div>
  </div>
</template>

<script>
// 添加css前缀方法
import { prefixStyle } from "common/scripts/dom";
// 增加css3动画桢
import animations from "create-keyframe-animation";
// 接口
import api from "api/api";
// 捕获异常
import { catchError } from "api/catchError";
// 提前定义好的播放模式
import { playMode } from "config/playmode";
// 获取vuex中播放相关的状态
import { playerMixin } from "common/mixins/player";
// vuex提供的钩子
import { mapGetters, mapMutations, mapActions } from "vuex";
// 一些公共的方法
import { shuffle, formatTime, getRandomInt } from "common/scripts/util";
// 初始化添加css前缀方法
const transform = prefixStyle("transform");
const transitionDuration = prefixStyle("transitionDuration");
export default {
  mixins: [playerMixin],
  components: {
    NavBar: () => import("components/navBar/navBar"),
    ProgressBar: () => import("components/progressbar/progressbar"),
    CurrentPlayList: () => import("components/musiclist/currentPlayList")
  },
  name: "",
  data() {
    return {
      songUrl: "",
      songLyric: {},
      songReady: false,
      errorUrlFlag: false,
      nowTime: 0,
      allTime: 0,
      showCurrentPlayList: false
    };
  },
  watch: {
    // 是否是全屏控制弹窗动画
    fullScreen(newFull) {
      if (newFull) {
        this.setPicAnimate();
      }
    },
    // 控制播放状态
    playing(newPlaying) {
      this.$nextTick(() => {
        const audio = this.$refs.audio;
        if (audio.src) {
          newPlaying ? audio && audio.play() : audio && audio.pause();
        }
      });
    },
    // 当上下切换歌曲，请求对应歌曲，进而播放
    currentSong(newCureent, oldCureent) {
      if (!newCureent.id || newCureent.id == oldCureent.id) {
        return;
      }
      this.$refs.cdImage.style.display = "none";
      this.$refs.cdImageLoading.$el.style.display = "";
      this.$refs.cdImage.src = newCureent.image;
      this.$refs.cdImage.onload = () => {
        this.$refs.cdImageLoading.$el.style.display = "none";
        this.$refs.cdImage.style.display = "";
      };
      this.$refs.audio.pause();
      this.nowTime = 0;
      this.allTime = 0;
      this.$refs.audio.currentTime = 0;
      this.getMusic(newCureent.id);
    },
    // 判断url有变化，就播放歌曲
    songUrl(newUrl) {
      // 用一个hack方法去判断歌曲连接是否合法，在接口中判断链接是否合法，如果不合法，设置小于0的随机数
      if (newUrl < 0) {
        this.errorUrlFlag = true;
        this.$dialog.toast({ mes: "啊哦，播放链接丢失了~", timeout: 1000 });
        return;
      }
      this.errorUrlFlag = false;
      this.$refs.audio.src = newUrl;
      this.$refs.audio.play();
    },
    songLyric(newLyric) {
      console.log("歌词", newLyric);
    }
  },
  computed: {
    ...mapGetters([
      "fullScreen",
      "playing",
      "currentIndex",
      "currentSong",
      "sequenceList",
      "playlist",
      "currentSong",
      "mode",
      "favoriteList"
    ]),

    // 播放模式的icon
    modeIcon() {
      return this.mode == playMode.sequence
        ? "icon-sequence"
        : this.mode == playMode.loop
        ? "icon-loop"
        : "icon-random";
    },
    // cd盘是否转动
    cdStateClass() {
      return this.playing ? "play" : "play pause";
    },
    // 设置百分比
    percent() {
      return this.nowTime / this.allTime;
    },
    // 播放状态icon
    playIcon() {
      return this.playing ? "icon-pause" : "icon-play";
    },
    // 迷你播放器按钮
    miniIcon() {
      return this.playing ? "icon-pause-mini" : "icon-play-mini";
    },
    // 防止audio的dom还没加载完毕导致播放异常
    disableClass() {
      return this.songReady ? "" : "disable";
    },
    // 播放模式icon
    modeIcon() {
      return this.mode == playMode.sequence
        ? "icon-sequence"
        : this.mode == playMode.loop
        ? "icon-loop"
        : "icon-random";
    },
    // 收藏的icon
    favoriteIcon() {
      if (this.isFavorite(this.currentSong)) {
        return "icon-favorite";
      }
      return "icon-not-favorite";
    }
  },
  methods: {
    // 接口：接口集合
    getMusic(id) {
      if (!id) {
        this.$router.back();
        return;
      }
      this.getSong(id);
      this.getLyric(id);
    },
    // 接口：获取歌曲
    async getSong(id) {
      const [error, result] = await catchError(api.getMusicUrl(id));
      if (error) {
        this.$dialog.toast({ mes: "网络异常", timeout: 1000 });
        return;
      }
      if (result.code == 200) {
        if (!result.data[0].url) {
          // 用一个hack方法去判断歌曲连接是否合法，在接口中判断链接是否合法，如果不合法，设置小于0的随机数
          this.songUrl = getRandomInt(-10000000000, 0);
          this.setPlayingState(false);
          this.songReady = true;
          return;
        }
        this.setPlayingState(true);
        this.songUrl = result.data[0].url;
        this.allTime = this.currentSong.duration;
      }
    },
    // 接口：获取歌词
    async getLyric(id) {
      const [error, result] = await catchError(api.getLyric(id));
      if (error) {
        this.$dialog.toast({ mes: "网络异常", timeout: 1000 });
        return;
      }
      if (result.code == 200) {
        let { klyric, lrc } = result;
        this.songLyric = { klyric, lrc };
      }
    },
    // audio媒体：切换歌曲太块触发dom未加载完毕的错误
    ready() {
      this.songReady = true;
      this.savePlayHistory(this.currentSong);
    },
    // audio媒体：歌曲加载失败
    error() {
      this.songReady = true;
    },
    // audio媒体：更新进度条
    updateTime(e) {
      this.nowTime = e.target.currentTime;
      this.allTime = e.target.duration;
    },
    // audio媒体：歌曲播放完毕去播放下一首歌（要判断模式）
    end() {
      if (this.mode == playMode.loop) {
        this.loop();
      } else {
        this.next();
      }
    },
    // audio媒体：循环歌曲的audio操作
    loop() {
      this.$refs.audio && (this.$refs.audio.currentTime = 0);
      this.$refs.audio && this.$refs.audio.play();
    },
    // audio媒体：拖动进度条歌曲前进与播放
    onPercentBarChange(percent) {
      if (!this.songReady) {
        return;
      }
      const currentTime = this.allTime * percent;
      this.$refs.audio &&
        (this.$refs.audio.currentTime = this.allTime * percent);
      if (!this.playing) {
        this.togglePlay();
      }
    },
    // 点击操作台：上一首
    prev() {
      // 歌还没准备好，return掉
      if (!this.songReady) {
        return;
      }
      // 如果播放列表只有一个上下切换就是循环模式
      if (this.playlist.length === 1) {
        this.loop();
      } else {
        let index = this.currentIndex - 1;
        // 如果当前播放的歌曲是第一首，上一首就是列表中最后一首
        if (index === -1) {
          index = this.playlist.length - 1;
        }
        // 设置当前播放歌曲
        this.setCurrentIndex(index);
        // 当暂停的时候，切换时，重新播放歌曲
        if (!this.playing) {
          this.togglePlay();
        }
      }
      this.songReady = false;
    },
    // 点击操作台：下一首
    next() {
      // 歌还没准备好，return掉
      if (!this.songReady) {
        return;
      }
      // 如果播放列表只有一个上下切换就是循环模式
      if (this.playlist.length === 1) {
        this.loop();
        return;
      } else {
        let index = this.currentIndex + 1;
        // 如果当前播放的歌曲是最后一首，下一首就是第一首歌
        if (index === this.playlist.length) {
          index = 0;
        }
        // 设置当前播放歌曲
        this.setCurrentIndex(index);
        // 当暂停的时候，切换时，重新播放歌曲
        if (!this.playing) {
          this.togglePlay();
        }
      }
      this.songReady = false;
    },
    // 点击操作台：播放或者暂停
    togglePlay() {
      if (this.errorUrlFlag) {
        return;
      }
      if (!this.songReady) {
        return;
      }
      this.setPlayingState(!this.playing);
    },
    // 点击操作台：更改播放模式
    changeMode() {
      const mode = (this.mode + 1) % 3;
      let mes = "";
      if (mode == 0) {
        mes = "列表循环";
      } else if (mode == 1) {
        mes = "单曲循环";
      } else {
        mes = "随机播放";
      }
      this.$dialog.toast({ mes, timeout: 1000 });
      this.setPlayMode(mode);
      let list = null;
      if (mode == playMode.random) {
        list = shuffle(this.sequenceList);
      } else {
        list = this.sequenceList;
      }
      this.resetCurrentIndex(list);
      this.setPlayList(list);
    },
    // 点击操作台：点击播放模式，当前歌曲不变
    resetCurrentIndex(list) {
      let index = list.findIndex(item => {
        return item.id === this.currentSong.id;
      });
      this.setCurrentIndex(index);
    },
    // 点击操作台：进行收藏
    toggleFavorite() {
      const song = this.currentSong;
      if (this.isFavorite(song)) {
        this.deleteFavoriteList(song);
      } else {
        this.saveFavoriteList(song);
      }
      return;
    },
    // 点击操作台：取消收藏
    deleteFavoriteList(song) {},
    // 点击操作台：添加收藏
    saveFavoriteList(song) {},
    // 点击操作台：是否是收藏的歌曲
    isFavorite(song) {
      const index = this.favoriteList.findIndex(item => {
        return item.id === song.id;
      });
      //  如果index大于-1就是喜欢的
      return index > -1;
    },
    // 点击操作台：点击迷你播放器的播放列表按钮
    showPlaylist() {
      this.showCurrentPlayList = true;
    },
    // 点击操作台：点击迷你播放器
    open() {
      this.setFullScreen(true);
    },
    // 播放播放列表的歌曲
    currentPlayListPlay(song, index) {
      this.showCurrentPlayList = false;
      this.selectPlay({
        list: this.playlist,
        index
      });
      this.setFullScreen(true);
    },
    // 动画相关：获取唱片图片的位置
    _getPosAndScale() {
      const targetWidth = 40;
      const paddingLeft = 40;
      const paddingBottom = 30;
      const paddingTop = 80;
      const width = window.innerWidth * 0.8;
      const scale = targetWidth / width;
      const x = -(window.innerWidth / 2 - paddingLeft);
      const y = window.innerHeight - paddingTop - width / 2 - paddingBottom;
      return {
        x,
        y,
        scale
      };
    },
    // 动画相关：设置唱片和播放控制台动画
    setPicAnimate() {
      const { x, y, scale } = this._getPosAndScale();
      let animation = {
        0: {
          transform: `translate3d(${x}px,${y}px,0) scale(${scale})`
        },
        60: {
          transform: `translate3d(0,0,0) scale(1.1)`
        },
        100: {
          transform: `translate3d(0,0,0) scale(1)`
        }
      };
      animations.registerAnimation({
        name: "move",
        animation,
        prosets: {
          duration: 400,
          easing: "linner"
        }
      });
      animations.runAnimation(this.$refs.middleL, "move");
      animations.runAnimation(this.$refs.bottom, "move", () => {
        animations.unregisterAnimation("move");
        this.$refs.middleL && (this.$refs.middleL.style.animation = "");
        this.$refs.bottom.style.animation = "";
      });
    },
    // 动画相关：设置播放页路由返回动画
    navBack() {
      const { x, y, scale } = this._getPosAndScale();
      let animation = {
        0: {
          transform: `translate3d(0,0,0) scale(1)`
        },
        60: {
          transform: `translate3d(0,0,0) scale(1.1)`
        },
        100: {
          transform: `translate3d(${x}px,${y}px,0) scale(${scale})`
        }
      };
      let animation2 = {
        0: {
          transform: `translate3d(0,0,0) scale(1)`
        },
        60: {
          transform: `translate3d(0,0,0) scale(0.5)`
        },
        100: {
          transform: `translate3d(${x}px,${y}px,0) scale(0.3)`
        }
      };
      animations.registerAnimation({
        name: "leave",
        animation,
        prosets: {
          duration: 200,
          easing: "linner"
        }
      });
      this.$refs.bottom.style[transform] = `translate3d(0,150%,0)`;
      animations.runAnimation(this.$refs.middleL, "leave", () => {
        this.$refs.middleL && (this.$refs.middleL.style.animation = "");
        this.$refs.bottom && (this.$refs.bottom.style[transform] = "");
        this.setFullScreen(false);
      });
    },
    // 一些操作方法：格式化时间
    formatTime: formatTime,
    // 更改vuex状态
    ...mapActions([
      "savePlayHistory",
      "selectPlay",
      "saveFavoriteList",
      "deleteFavoriteList"
    ]),
    ...mapMutations({
      setFullScreen: "SET_FULL_SCREEN",
      setPlayingState: "SET_PLAYING_STATE",
      setCurrentIndex: "SET_CURRENT_INDEX",
      setPlayMode: "SET_PLAY_MODE",
      setPlayList: "SET_PLAYLIST"
    })
  },
  created() {
    // 第一次走这个，前后切换歌曲就不走这块了
    this.getMusic(this.currentSong.id);
  },
  mounted() {}
};
</script>

<style scoped lang='less'>
@import "~common/styles/variable.less";
.player {
  .normal-player {
    background: #ffffff;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    .background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 95%;
      z-index: 0;
      opacity: 0.6;
      filter: blur(40px);
    }
    .middle {
      padding-top: 50px;
      .middle-l {
        display: inline-block;
        vertical-align: top;
        position: relative;
        width: 100%;
        padding-top: 80%;
        overflow: hidden;
        transition: all 0.8s cubic-bezier(0.86, 0.18, 0.82, 1.32);
        .cd-wrapper {
          position: absolute;
          left: 10%;
          top: 0;
          width: 80%;
          height: 100%;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.86, 0.18, 0.82, 1.32);
          .cd {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border: 60px solid rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            width: 100%;
            &.play {
              animation: rotate 20s linear infinite;
            }
            &.pause {
              border: 60px solid rgba(0, 0, 0, 0.3);

              border-radius: 50%;
              animation-play-state: paused;
            }
            img {
              box-sizing: border-box;
              display: inline-block;
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
            .loading {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }
    .bottom {
      position: absolute;
      bottom: 100px;
      width: 100%;
      transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
      .progress-wrapper {
        display: flex;
        align-items: center;
        width: 90%;
        margin: 0px auto;
        padding: 20px 0;
        .time {
          font-size: @font-size-medium-x;
          flex: 0 0 60px;
          line-height: 60px;
          width: 60px;
          color: #ffffff;
          &.time-l {
            margin-right: 10px;
            text-align: left;
          }
          &.time-r {
            margin-left: 10px;
            text-align: right;
          }
        }
        .progress-bar-wrapper {
          flex: 1;
        }
      }
      .operators {
        display: flex;
        align-items: center;
        .icon {
          flex: 1;
          color: @play-op-color;
          &.disable {
            color: #ffffff;
          }
          i {
            font-size: 60px;
          }
        }
        .i-left {
          text-align: right;
        }
        .i-center {
          padding: 0 40px;
          text-align: center;
        }
        i {
          font-size: 80px;
        }
        .i-right {
          text-align: left;
        }
        .icon-favorite {
          color: @play-op-color;
        }
      }
    }
  }
  .mini-player {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 180;
    width: 100%;
    height: 120px;
    box-sizing: border-box;
    padding: 0 32px;
    border-top: solid 1px @border-color;
    background: #ffffff;
    &.mini-enter-active,
    &.mini-leave-active {
      transition: all 0.4s;
    }
    &.mini-enter,
    &.mini-leave-to {
      opacity: 0;
    }
    .icon {
      width: 80px;
    }
    .text {
      padding-left: 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      line-height: 40px;
      overflow: hidden;
      .name {
        font-size: @font-size-large;
      }
      .desc {
        font-size: @font-size-medium;
        color: @text-subtitle;
      }
    }
    .control {
      width: 60px;
      margin-left: 32px;
      .icon-play-mini,
      .icon-pause-mini,
      .icon-playlist {
        font-size: 60px;
        color: @text-color;
      }
      .icon-playlist {
        font-size: 65px;
      }
    }
  }
  .loading {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
  }
  .currentPlayList {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 300;
    .mask {
      position: fixed;
      z-index: 200;
      width: 100%;
      bottom: 0;
      left: 0;
      height: 50000px;
      background: rgba(0, 0, 0, 0.3);
    }
    .wrap {
      background: #ffffff;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 500;
      height: 600px;
      box-sizing: border-box;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
    }
  }
  // 旋转
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
