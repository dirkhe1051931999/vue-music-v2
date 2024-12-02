<template>
  <div class="palace">
    <ul>
      <li v-for="(item, index) in place" :key="index">
        <router-link :to="item.href">
          <div class="icon" :class="`icon-${item.icon}`"></div>
          <div class="name">{{ item.name }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  name: '',
  data() {
    return {
      place: [
        {
          icon: 'fm',
          name: '私人FM',
          href: '/index/privatefm',
        },
        {
          icon: 'recommend',
          name: '每日推荐',
          href: '/index/dailyrecommend',
        },
        {
          icon: 'list',
          name: '歌单',
          href: '/index/song',
        },
        {
          icon: 'rank',
          name: '排行榜',
          href: '/index/rank',
        },
      ],
    };
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.palace {
  margin-top: 60px;
  ul {
    padding: 40px 32px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    li {
      .icon {
        position: relative;
        height: 100px;
        width: 100px;
        background: $red;
        border-radius: 50%;
        display: flex;
        line-height: 100px;
        justify-content: center;
        font-size: 40px;
        color: #ffffff;
      }
      .name {
        text-align: center;
        padding-top: 15px;
        font-size: $font-size-large;
      }
    }
  }
}
</style>