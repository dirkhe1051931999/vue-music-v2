<template>
  <div>
    <skeleton>
      <!-- 第一行 -->
      <skeleton-row padding="10px">
        <skeleton-square height="200px" class="banner" />
      </skeleton-row>
      <!-- 第二行 -->
      <skeleton-row padding="10px" v-for="(item, index) in 3" :key="index">
        <skeleton-square width="90px" height="90px" />
        <skeleton-square width="90px" height="90px" class="margin" />
        <skeleton-square width="90px" height="90px" class="margin" />
      </skeleton-row>
    </skeleton>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  box-sizing: border-box;
  background: #e9e7ef;
}
.margin {
  margin-left: 20px;
}
</style>