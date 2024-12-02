<template>
  <div class="music-list">
    <ul class="list">
      <li v-for="(song, index) in list" @click="toPlay(song, index)" :key="index" :class="{ active: currentIndex === index }" class="nowrap">
        <div class="index" v-html="setIndexText(index)"></div>
        <div class="song">
          <div class="name nowrap">{{ song.name }}</div>
          <div class="author">{{ song.singer }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
    currentIndex: {
      type: Number,
      default: -1,
    },
  },
  components: {},
  name: '',
  computed: {
    setIndexText() {
      return (index) => {
        if (this.currentIndex === index) {
          return '<i class="icon-current-play"></i>';
        } else {
          return index + 1;
        }
      };
    },
  },
  data() {
    return {};
  },
  methods: {
    toPlay(song, index) {
      if (this.$listeners) {
        this.$listeners.toPlay(song, index);
        return;
      }
      this.$emit('toPlay', song, index);
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.music-list {
  padding: 0 32px;
  .list {
    li {
      height: 120px;
      display: flex;
      justify-content: flex-start;
      border-bottom: solid 1px $border-color;
      position: relative;
      .index {
        line-height: 120px;
        padding-right: 40px;
        font-size: $font-size-9;
      }
      .song {
        display: flex;
        flex-direction: column;
        margin: auto 0;
        .name {
          width: 600px;
          font-size: $font-size-9;
        }
        .author {
          padding-top: 10px;
          font-size: $font-size-large-x;
          color: $text-color;
        }
      }
      &.active {
        color: $red;
        .index {
          margin-left: -8px;
        }
      }
    }
  }
}
</style>