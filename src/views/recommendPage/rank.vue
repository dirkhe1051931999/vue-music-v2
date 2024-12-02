<template>
  <div class="ranklist">
    <NavBar />
    <Loading1 class="loading" v-if="!officialList.length" />
    <scroll class="ranklist-content" ref="scroll" v-if="officialList.length > 0">
      <Songlist2 title="官方推荐" :list="officialList" />
      <Songlist title="推荐榜" :list="recommendList" />
      <Songlist title="全球榜" :list="internationalList" />
      <Songlist title="更多榜单" :list="moreList" />
      <div class="list-over">已经到底了</div>
    </scroll>
  </div>
</template>

<script>
import { scroll } from 'common/mixins/scroll';
import api from 'api/api';
import { catchError } from 'api/catchError';
const heightMiniPlayer = 60;
export default {
  mixins: [scroll],
  components: {
    NavBar: () => import('components/navBar/navBar'),
    Scroll: () => import('components/scroll/scroll'),
    Songlist2: () => import('components/songlist/songlist2'),
    Songlist: () => import('components/songlist/songlist'),
  },
  name: '',
  computed: {},
  watch: {
    // 兼容迷你播放器高度
    fullScreen(newFull) {
      if (!newFull) {
        this.$refs.listOver.style.paddingBottom = `${heightMiniPlayer}px`;
        this.$refs.scroll && this.$refs.scroll.refresh();
      }
    },
  },
  data() {
    return {
      officialList: [],
      recommendList: [],
      internationalList: [],
      moreList: [],
    };
  },
  methods: {
    async getRankList() {
      const [error, result] = await catchError(api.getToplistDetail());
      if (error) {
        this.$dialog.toast({ mes: '网络异常', timeout: 1000 });
        return;
      }
      if (result.code === 200) {
        console.log(result);
        const { list } = result;
        this.officialList = list.slice(0, 4);
        this.recommendList = list.slice(4, 10);
        this.internationalList = list.slice(10, 16);
        this.moreList = list.slice(16);
      }
    },
  },
  created() {
    this.getRankList();
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.ranklist {
  .loading {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
  }
}
</style>