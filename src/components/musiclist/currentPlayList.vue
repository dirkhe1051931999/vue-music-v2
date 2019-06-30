<template>
  <div class="container">
    <div class="control" @click="changeMode">
      <i :class="modeIcon"></i>
      <span>{{ modeText }}</span>
    </div>
    <Musiclist :list="list" v-on="$listeners" :currentIndex="currentIndex" />
  </div>
</template>

<script>
// 提前定义好的播放模式
import { playMode } from "config/playmode";
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    currentIndex: Number,
    mode: Number
  },
  computed: {
    // 播放模式的icon
    modeIcon() {
      return this.mode == playMode.sequence
        ? "icon-sequence"
        : this.mode == playMode.loop
        ? "icon-loop"
        : "icon-random";
    },
    // 播放模式的文字
    modeText() {
      const mode = this.mode;
      let mes = "";
      if (mode == 0) {
        mes = "列表循环";
      } else if (mode == 1) {
        mes = "单曲循环";
      } else {
        mes = "随机播放";
      }
      return mes;
    }
  },
  components: {
    Musiclist: () => import("./musiclist")
  },
  name: "",
  data() {
    return {};
  },
  methods: {
    toPlay(song, index) {
      this.$emit("toPlay", song, index);
    },
    changeMode() {
      this.$emit("changeMode");
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped lang='less'>
@import url(~common/styles/variable.less);
.container {
  .control {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    height: 100px;
    line-height: 100px;
    border-bottom: solid 1px @border-color;
    padding: 0 32px;
    span {
      display: inline-block;
      padding-left: 10px;
      color: @text-subtitle;
      font-size: @font-size-large-x;
    }
    i {
      display: inline-block;
      line-height: 100px;
      color: @text-color;
      font-size: 40px;
    }
  }
}
</style>
