<template>
  <div ref="container" class="container">
    <!--导航栏-->
    <TitleBar
      ref="titleBar"
      @openSearch="$router.push('/search')"
      style="height:9.6vw"
      :active="1"
    />
    <!-- tab切换 -->
    <div class="navigate">
      <div
        :class="{ active: currentNavIndex == index }"
        v-for="(item, index) in navigate"
        :key="index"
        @click="currentNavIndex = index"
      >
        {{ item }}
      </div>
    </div>
    <!-- 播放列表 -->
    <div class="list">
      <div class="history" v-if="currentNavIndex == 0">
        <UserPlayList :list="playHistory" @toPlay="toPlay" />
      </div>
      <div class="favorite" v-else>
        <UserPlayList :list="favoriteList" @toPlay="toPlay" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
const heightMiniPlayer = 60;
export default {
  components: {
    TitleBar: () => import("components/titleBar/titleBar"),
    UserPlayList: () => import("components/musiclist/userPlayList")
  },
  name: "",
  computed: {
    ...mapGetters(["favoriteList", "playHistory", "fullScreen"])
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
      navigate: ["播放历史", "我的收藏"],
      currentNavIndex: 0
    };
  },
  methods: {
    toPlay(song, index) {
      let list = [];
      if (this.currentNavIndex == 0) {
        list = this.playHistory;
      } else {
        list = this.favoriteList;
      }
      // 使用vuex存储播放列表
      this.selectPlay({
        list: list,
        index
      });
      this.setFullScreen(true);
    },
    ...mapActions(["selectPlay"]),
    ...mapMutations({
      setFullScreen: "SET_FULL_SCREEN"
    })
  },
  created() {},
  mounted() {
    if (!this.fullScreen && $(".mini-player").height()) {
      this.$refs.container.style.paddingBottom = `${heightMiniPlayer}px`;
    }
  }
};
</script>

<style scoped lang='less'>
@import url(~common/styles/variable.less);
.container {
  background: #ffffff;
  overflow: hidden;
  .navigate {
    padding: 20px 50px;
    display: flex;
    justify-content: center;
    border-bottom: solid 1px @border-color;
    div {
      height: 52px;
      line-height: 52px;
      padding: 0 20px;
      border-radius: 8px;
      background: #ffffff;
      color: @text-color;
      &.active {
        margin-right: 5px;
        color: #ffffff;
        background: @red;
        border: solid 1px @border-color;
      }
    }
  }
  .list {
    background: #ffffff;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
