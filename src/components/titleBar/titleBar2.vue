<template>
  <div>
    <div class="container">
      <div class="left">杭州</div>
      <div class="search" @click="openSearch">输入你喜欢的爱豆~</div>
      <div class="right">
        <i class="icon-mine" @click="$router.push('/user')"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: '',
  data() {
    return {};
  },
  methods: {
    openSearch() {
      this.$emit('openSearch');
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.container {
  height: 85px;
  line-height: 85px;
  padding: 0 32px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  .left {
    font-size: $font-size-large;
  }
  .search {
    text-align: center;
    color: #999999;
    width: 70%;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    background: #f5f5f5;
    align-self: center;
  }
  .right {
    font-size: 34px;
    i {
      line-height: 85px;
    }
  }
}
</style>