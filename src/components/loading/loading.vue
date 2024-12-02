<template>
  <div class="spinner">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = "loading";

export default {
  name: COMPONENT_NAME
};
</script>
<style lang="scss">
.spinner {
  height: 60px;
  text-align: center;
  font-size: 10px;
  div {
    background-color: $red;
    height: 100%;
    width: 6px;
    display: inline-block;
    animation: stretchdelay 1.2s infinite ease-in-out;
    margin-right: 5px;
  }
  .rect2 {
    animation-delay: -1.1s;
  }
  .rect3 {
    animation-delay: -1s;
  }
  .rect4 {
    animation-delay: -0.9s;
  }
  .rect5 {
    animation-delay: -0.8s;
  }
}
@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}
@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>