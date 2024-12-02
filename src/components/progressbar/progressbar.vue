<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn" @touchstart.prevent="progressTouchStart" @touchmove.prevent="progressTouchMove" @touchend="progressTouchEnd">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { prefixStyle } from 'common/scripts/dom';
const progressBtnWidth = 16;
const transform = prefixStyle('transform');
export default {
  props: {
    percent: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  name: '',
  watch: {
    // 进度条实时刷新
    percent(newPercent) {
      if (newPercent >= 0 && !this.touch.initiated) {
        // 进度条的宽度
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth;
        const offsetWidth = newPercent * barWidth;
        this._offsetWidth(offsetWidth);
      }
    },
  },
  data() {
    return {};
  },
  methods: {
    // 进度条交互功能
    progressClick(e) {
      const rect = this.$refs.progressBar.getBoundingClientRect();
      // this._offsetWidth(e.offsetX);
      const offsetWidth = e.pageX - rect.left;
      this._offsetWidth(offsetWidth);
      this._triggerPercent();
    },
    progressTouchStart(e) {
      this.touch.initiated = true;
      this.touch.startX = e.touches[0].pageX;
      // 当前progress的进度
      this.touch.left = this.$refs.progress.clientWidth;
    },
    progressTouchMove(e) {
      // 如果直接touchmove retrun 掉
      if (!this.touch.initiated) {
        return;
      }
      // 横向偏移量
      const delatX = e.touches[0].pageX - this.touch.startX;
      const offsetWidth = Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + delatX));
      this._offsetWidth(offsetWidth);
    },
    progressTouchEnd(e) {
      this.touch.initiated = false;
      this._triggerPercent();
    },
    // 拖动完成 派发事件，父级获取拖动百分比
    _triggerPercent() {
      const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth;
      const percent = this.$refs.progress.clientWidth / barWidth;
      this.$emit('percentChange', percent);
    },
    _offsetWidth(offsetWidth) {
      this.$refs.progress.style.width = `${offsetWidth}px`;
      this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px,0,0)`;
    },
  },
  created() {
    setTimeout(() => {
      this.touch = {};
    });
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.progress-bar {
  height: 60px;
  .bar-inner {
    position: relative;
    top: 26px;
    height: 8px;
    background: #ffffff;
    .progress {
      position: absolute;
      height: 100%;
      background: #f5f5f5;
    }
    .progress-btn-wrapper {
      position: absolute;
      left: -16px;
      top: -26px;
      width: 60px;
      height: 60px;
      .progress-btn {
        position: relative;
        top: 14px;
        left: 14px;
        box-sizing: border-box;
        width: 32px;
        height: 32px;
        border: 6px solid $border-color;
        border-radius: 50%;
        background: $play-op-color;
      }
    }
  }
}
</style>