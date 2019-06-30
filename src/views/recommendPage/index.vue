<template>
  <div ref="container">
    <!--导航栏-->
    <TitleBar
      ref="titleBar"
      @openSearch="openSearch"
      :active="0"
      @openSlide="showSlide = true"
    />
    <!-- 悬浮的输入框 -->
    <TitleBar2
      ref="titleBar2"
      :class="{ animate: !showTitleBar }"
      @openSearch="openSearch"
      class="titlebar2"
    />
    <!-- Carousel -->
    <Carousel :carousel="carousel" />
    <!-- 宫格 -->
    <Palace />
    <!-- 推荐歌单 -->
    <Songlist
      :list="recommendSong"
      title="推荐歌单"
      v-if="recommendSong.length > 0"
    />
    <!-- 已经到底了 -->
    <div class="list-over" v-if="recommendSong.length > 0">已经到底了</div>
    <Loading1 class="loading" v-if="!recommendSong.length" />
    <!-- 子路由 -->
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="page" :style="routerviewStyle" />
      </keep-alive>
    </transition>
    <yd-backtop></yd-backtop>
    <yd-popup v-model="showSlide" position="left" width="60%" class="slide">
      <div class="banner">
        <img src="~common/images/avatar.jpg" alt="" />
      </div>
      <ul class="info">
        <li class="github">
          <img src="~common/images/githublogo.png" alt="" class="" />
          <a href="https://github.com/dirkhe1051931999" target="_blank"
            >dirkhe1051931999</a
          >
        </li>
        <li class="item">
          <img src="~common/images/githublogo.png" alt="" class="" />
          <a
            href="https://github.com/dirkhe1051931999/vue-music-v2"
            target="_blank"
            >项目地址</a
          >
        </li>
      </ul>
    </yd-popup>
  </div>
</template>

<script>
import { transition } from "common/mixins/transition";
import api from "api/api";
import { catchError } from "api/catchError";
import { mapGetters } from "vuex";
import Vue from "vue";
import { Popup } from "vue-ydui/dist/lib.px/popup";
import { BackTop } from "vue-ydui/dist/lib.px/backtop";
import "vue-ydui/dist/ydui.base.css";
Vue.component(BackTop.name, BackTop);
Vue.component(Popup.name, Popup);
const heightMiniPlayer = 60;
export default {
  mixins: [transition],
  components: {
    TitleBar: () => import("components/titleBar/titleBar"),
    TitleBar2: () => import("components/titleBar/titleBar2"),
    Carousel: () => import("components/carousel/carousel"),
    Palace: () => import("components/palace/palace"),
    Songlist: () => import("components/songlist/songlist")
  },
  name: "",
  computed: {
    ...mapGetters(["fullScreen"]),
    routerviewStyle() {
      if (!this.fullScreen && $(".mini-player").height()) {
        return `bottom:${heightMiniPlayer + 35}px`;
      }
    }
  },
  watch: {
    fullScreen(newFull) {
      if (!newFull && $(".mini-player").height()) {
        this.$refs.container.style.paddingBottom = `${heightMiniPlayer}px`;
      }
    }
  },
  data() {
    return {
      carousel: [],
      recommendSong: [],
      showTitleBar: true,
      showSlide: false
    };
  },
  methods: {
    async getCarousel() {
      const [error, result] = await catchError(api.getBanner());
      if (error) {
        this.$dialog.toast({ mes: "网络异常", timeout: 1000 });
        return;
      }
      if (result.code == 200) {
        this.carousel = result.banners;
      }
    },
    async getRecommendSong() {
      const [error, result] = await catchError(api.getRecommendSongList());
      if (error) {
        this.$dialog.toast({ mes: "网络异常", timeout: 1000 });
        return;
      }
      if (result.code == 200) {
        this.recommendSong = result.result;
      }
    },
    listenScroll() {
      window.addEventListener("scroll", e => {
        const scrollY = window.scrollY;
        if (this.$refs.titleBar) {
          const max = (this.$refs.titleBar.$el.clientHeight * 1) / 3;
          if (scrollY > max) {
            this.showTitleBar = false;
          } else {
            this.showTitleBar = true;
          }
        }
      });
    },
    openSearch() {
      this.$router.push({
        path: "/search"
      });
    }
  },
  created() {
    this.getCarousel();
    this.getRecommendSong();
  },
  mounted() {
    this.listenScroll();
    if (!this.fullScreen && $(".mini-player").height()) {
      this.$refs.container.style.paddingBottom = `${heightMiniPlayer}px`;
    }
  }
};
</script>

<style scoped lang='less'>
@import url(~common/styles/variable.less);
.titlebar2 {
  color: #ffffff;
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  z-index: 50;
  background: @red;
  transition: all 0.5s ease;
  transform: translateY(-72px);
  &.animate {
    transform: translateY(0);
  }
}
.loading {
  margin-top: 50px;
}
.slide {
  .banner {
    width: 100%;
    height: 30%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .info {
    padding: 20px 32px;
    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      padding: 10px 0;
      img {
        display: inline-block;
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>
