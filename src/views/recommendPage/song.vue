<template>
  <div class="songlist">
    <NavBar />
    <scroll class="songlist-content" ref="scroll"> 歌单 </scroll>
  </div>
</template>

<script>
import { scroll } from 'common/mixins/scroll';
export default {
  mixins: [scroll],
  components: {
    NavBar: () => import('components/navBar/navBar'),
    Scroll: () => import('components/scroll/scroll'),
  },
  name: '',
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped lang="scss"></style>