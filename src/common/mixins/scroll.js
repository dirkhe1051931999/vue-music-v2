export const scroll = {
  computed: {
    // 下上拉加载下拉刷新计算属性
    scrollbarObj: function() {
      return this.scrollbar
        ? {
            fade: this.scrollbarFade
          }
        : false;
    },
    pullDownRefreshObj: function() {
      return this.pullDownRefresh
        ? {
            threshold: parseInt(this.pullDownRefreshThreshold),
            stop: parseInt(this.pullDownRefreshStop)
          }
        : false;
    },
    pullUpLoadObj: function() {
      return this.pullUpLoad
        ? {
            threshold: parseInt(this.pullUpLoadThreshold),
            txt: {
              more: this.pullUpLoadMoreTxt,
              noMore: this.pullUpLoadNoMoreTxt
            }
          }
        : false;
    }
  },
  watch: {
    // 上拉加载下拉刷新监听
    scrollbarObj: {
      handler() {
        this.rebuildScroll();
      },
      deep: true
    },
    pullDownRefreshObj: {
      handler(val) {
        const scroll = this.$refs.scroll.scroll;
        if (val) {
          scroll.openPullDown();
        } else {
          scroll.closePullDown();
        }
      },
      deep: true
    },
    pullUpLoadObj: {
      handler(val) {
        const scroll = this.$refs.scroll.scroll;
        if (val) {
          scroll.openPullUp();
        } else {
          scroll.closePullUp();
        }
      },
      deep: true
    },
    startY() {
      this.rebuildScroll();
    }
  },
  methods: {
    // 下拉刷新上拉加载函数
    updateScrollbar(val) {
      this.scrollbar = val;
    },
    updateScrollbarFade(val) {
      this.scrollbarFade = val;
    },
    updatePullDownRefresh(val) {
      this.pullDownRefresh = val;
    },
    updatePullDownRefreshThreshold(val) {
      this.pullDownRefreshThreshold = val;
    },
    updatePullDownRefreshStop(val) {
      this.pullDownRefreshStop = val;
    },
    updatePullUpLoad(val) {
      this.pullUpLoad = val;
    },
    updatePullUpLoadThreshold(val) {
      this.pullUpLoadThreshold = val;
    },
    updatePullUpLoadMoreTxt(val) {
      this.pullUpLoadMoreTxt = val;
    },
    updatePullUpLoadNoMoreTxt(val) {
      this.pullUpLoadNoMoreTxt = val;
    },
    updateStartY(val) {
      this.startY = val;
    },
    updateScrollToX(val) {
      this.scrollToX = val;
    },
    updateScrollToY(val) {
      this.scrollToY = val;
    },
    updateScrollToTime(val) {
      this.scrollToTime = val;
    },
    updateScrollToEasing(val) {
      this.scrollToEasing = val;
    },
    rebuildScroll() {
      Vue.nextTick(() => {
        this.$refs.scroll.destroy();
        this.$refs.scroll.initScroll();
      });
    }
  },
  data() {
    return {
      scrollbar: false,
      scrollbarFade: true,
      pullDownRefresh: false,
      pullDownRefreshThreshold: 90,
      pullDownRefreshStop: 40,
      pullUpLoad: true,
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: "",
      pullUpLoadNoMoreTxt: "我也是有底线的~",
      startY: 0,
      scrollToX: 0,
      scrollToY: 0,
      scrollToTime: 700,
      scrollToEasing: "bounce",
      scrollToEasingOptions: ["bounce", "swipe", "swipeBounce"],
      listenScroll: true,
      listenScrollEnd: true,
      listenBeforeScroll: true,
      posY: 0
    };
  }
};
