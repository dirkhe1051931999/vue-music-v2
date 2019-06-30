<template>
  <div class="private-fm">
    <NavBar />
    <scroll class="private-fm-content" ref="scroll">
      私人FM
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
