<template>
  <div class="songlist2">
    <h1 class="list-title">{{ title }}</h1>
    <ul class="list">
      <li v-for="(o, i) in list" :key="i" class="official">
        <router-link :to="{ path: '/playlist', query: { id: o.id } }">
          <img v-lazy="o.coverImgUrl" :alt="o.description" />
          <ul>
            <li v-for="(t, j) in o.tracks" :key="j" class="nowrap tracks">
              {{ j + 1 }}.{{ t.first }}-{{ t.second }}
            </li>
          </ul>
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
      type: Array
    },
    title: {
      type: String,
      default: "标题"
    }
  },
  components: {},
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
@import url(~common/styles/variable.less);
.songlist2 {
  padding: 0 32px;
  .list {
    .official {
      a {
        display: block;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
        img {
          border-radius: 8px;
          display: block;
          width: 33%;
          height: 100%;
        }
        ul {
          width: 63%;
          display: flex;
          flex-direction: column;
          align-items: center;
          .tracks {
            width: 100%;
            padding: 0;
            font-size: @font-size-large-x;
            margin: auto;
          }
        }
      }
    }
  }
}
</style>
