<template>
  <div class="songlist">
    <h1 class="list-title">{{ title }}</h1>
    <ul class="list">
      <li v-for="(item, index) in list" :key="index">
        <router-link :to="{ path: '/playlist', query: { id: item.id } }">
          <img v-lazy="item.coverImgUrl || item.picUrl" :alt="item.descriptioon || item.copywriter" />
          <div class="name">{{ item.name }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      default: [],
      type: Array,
    },
    title: {
      type: String,
      default: '标题',
    },
  },
  components: {},
  name: '',
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.songlist {
  padding: 0 32px;
  .list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    li {
      width: 32%;
      height: 100%;
      margin-right: 2%;
      a {
        display: block;
        img {
          border-radius: 8px;
          display: block;
          width: 100%;
          height: 100%;
        }
        div {
          line-height: 40px;
          padding: 10px 0;
          font-size: $font-size-large-x;
        }
      }
    }
    li:nth-of-type(3n + 3) {
      margin-right: 0;
    }
  }
}
</style>