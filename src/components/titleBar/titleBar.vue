<template>
  <div class="title-bar">
    <div class="bar">
      <div class="settings icon-setting" @click="$emit('openSlide')"></div>
      <div class="nav">
        <div class="recommed" @click="$router.push('/index')" :class="{ active: active === 0 }">推荐页</div>
        <div class="mine" @click="$router.push('/user')" :class="{ active: active === 1 }">个人中心</div>
      </div>
      <div class="search icon-search" @click="openSearch"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: Number,
  },
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
.title-bar {
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  background: $red;
  color: #ffffff;
  height: 300px;
  .bar {
    display: flex;
    justify-content: space-between;
    height: 72px;
    line-height: 72px;
    .settings {
      font-size: 34px;
      line-height: 72px;
    }
    .nav {
      width: 40%;
      display: flex;
      justify-content: space-between;
      font-size: $font-size-large;
      color: #f18686;
      .active {
        color: #ffffff;
      }
    }
    .search {
      font-size: 40px;
      line-height: 72px;
    }
  }
}
</style>