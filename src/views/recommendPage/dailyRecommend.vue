<template>
  <div class="dayilyRecommend">
    <NavBar />
    <scroll class="dayily-recommend-content" ref="scroll">
      每日推荐
    </scroll>
  </div>
</template>

<script>
import { scroll } from "common/mixins/scroll";
export default {
  mixins: [scroll],
  components: {
    NavBar: () => import("components/navBar/navBar"),
    Scroll: () => import("components/scroll/scroll")
  },
  name: "",
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped lang='less'>
</style>
