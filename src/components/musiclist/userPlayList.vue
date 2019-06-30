<template>
  <div>
    <Musiclist :list="list" v-on="$listeners" :currentIndex="currentIndex" />
  </div>
</template>

<script>
export default {
  components: {
    Musiclist: () => import("./musiclist")
  },
  props: {
    list: {
      type: Array,
      default: []
    },
    currentIndex: Number
  },
  data() {
    return {};
  },

  computed: {},
  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>
</style>