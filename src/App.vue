<template>
  <div id="app">
    <router-view />
    <Play></Play>
  </div>
</template>
<script>
import Play from 'views/playPage/play';
export default {
  components: {
    Play,
  },
};
</script>
<style lang="scss">
.page {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 72px;
  width: 100%;
  background: #f5f5f5;
  z-index: 100;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 0.8);
}
.slide-left-enter,
.slide-right-leave-active {
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  transform: translate(-100% 0);
}
</style>