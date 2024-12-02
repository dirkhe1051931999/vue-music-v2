<template>
  <div class="navbar">
    <div class="container" :class="{ transparent: transparent }">
      <div class="left" @click="back">
        <i :class="icon" :style="iconColor"></i>
      </div>
      <div class="title nowrap" v-if="showTitle" :style="titleColor">
        {{ !title ? $route.meta.name : title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showTitle: {
      type: Boolean,
      default: true,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'icon-back',
    },
    iconColor: {
      type: String,
      default: '',
    },
    titleColor: {
      type: String,
      default: '',
    },
    listenBack: {
      type: Boolean,
      default: false,
    },
  },
  name: '',
  data() {
    return {};
  },
  methods: {
    back() {
      this.listenBack && this.$emit('navBack');
      !this.listenBack && this.$router.back();
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.navbar {
  position: relative;
  .container {
    font-size: $font-size-large;
    width: 100%;
    box-sizing: border-box;
    padding: 0 32px;
    height: 72px;
    line-height: 72px;
    background: $red;
    display: flex;
    color: #ffffff;
    .left {
      font-size: 44px;
      i {
        line-height: 72px;
      }
    }
    .title {
      padding-left: 44px;
    }
    &.transparent {
      background: rgba(255, 255, 255, 0);
    }
  }
}
</style>