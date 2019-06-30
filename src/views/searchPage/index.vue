<template>
  <div class="container" ref="container">
    <NavBar />
    <div class="top">
      <div class="left">
        <div class="default" @click="toggle">
          {{ types[currentSelect].name }}
        </div>
        <ul
          class="select"
          ref="select"
          v-show="showSelect"
          @click="showSelect = false"
        >
          <li
            v-for="(item, index) in types"
            :key="index"
            @click="currentSelect = index"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="right">
        <yd-search
          v-model="searchKeywords"
          :on-submit="submitHandler"
          placeholder="点击回车搜索"
        >
        </yd-search>
      </div>
    </div>
    <div class="tips" v-show="searchKeywords.length == 0">
      输入你喜欢的爱豆~ 可选搜索类型哦~
    </div>
    <div class="list">
      <Musiclist @toPlay="toPlay" :list="searchResult" />
    </div>
    <Loading1 class="loading" style="display:none" ref="loading"></Loading1>
  </div>
</template>

<script>
import api from "api/api";

import { createSong } from "common/scripts/song.class";
import Vue from "vue";
import { Search } from "vue-ydui/dist/lib.px/search";
import { catchError } from "api/catchError";
import "vue-ydui/dist/ydui.base.css";
import { mapActions, mapMutations, mapGetters } from "vuex";
Vue.component(Search.name, Search);
const heightMiniPlayer = 60;
export default {
  components: {
    Musiclist: () => import("components/musiclist/musiclist"),
    NavBar: () => import("components/navBar/navBar")
  },
  name: "",
  data() {
    return {
      searchKeywords: "",
      searchResult: [],
      searchList: [],
      page: 1,
      showSelect: false,
      currentSelect: 0,
      types: [
        {
          id: 1,
          name: "单曲"
        },
        {
          id: 1000,
          name: "歌单"
        }
      ]
    };
  },
  watch: {
    // 兼容迷你播放器高度
    fullScreen(newFull) {
      if (!newFull && $(".mini-player").height()) {
        this.$refs.container.style.paddingBottom = `${heightMiniPlayer}px`;
      }
    },
    searchKeywords(newSearch) {
      if (!newSearch) {
        this.searchResult = [];
      }
    }
  },
  computed: {
    ...mapGetters(["fullScreen"])
  },
  methods: {
    async getSearch(keywords, type, page) {
      const [error, result] = await catchError(
        api.getSearch(keywords, type, page)
      );
      if (error) {
        this.$dialog.toast({ mes: "网络异常", timeout: 1000 });
        return;
      }
      if (result.code == 200) {
        let type = this.types[this.currentSelect].id;
        this.$refs.loading.$el.style.display = "none";
        if (
          Object.keys(result.result).length == 0 ||
          (result.result.songs && !result.result.songs.length) ||
          (result.result.playlists && !result.result.playlists.length)
        ) {
          this.$dialog.toast({ mes: "空空如也~", timeout: 2000 });
          return;
        }
        let list = result.result.songs || result.result.playlists;
        this.searchResult = this.normalizeSongs(list, type);
      }
    },
    normalizeSongs(list, type) {
      let ret = [];
      for (let song of list) {
        let obj;
        if (type == 1) {
          obj = {
            id: song.id,
            singer: song.artists,
            name: song.name,
            album: song.album,
            duration: song.duration,
            image: song.album.artist.img1v1Url,
            url: "",
            lyric: ""
          };
        } else if (type == 1000) {
          obj = {
            id: song.id,
            singer: [],
            name: song.name,
            album: song.coverImgUrl,
            duration: "",
            image: song.coverImgUrl,
            url: "",
            lyric: ""
          };
        }
        ret.push(createSong(obj));
      }
      return ret;
    },
    submitHandler() {
      this.$refs.loading.$el.style.display = "";
      let keywords = this.searchKeywords;
      let type = this.types[this.currentSelect].id;
      let page = this.page;
      this.getSearch(keywords, type, page);
    },
    toPlay(song, index) {
      let type = this.types[this.currentSelect].id;
      if (type == 1) {
        this.selectPlay({
          list: this.searchResult,
          index
        });
        this.setFullScreen(true);
      } else if (type == 1000) {
        this.$router.push({
          path: "/playlist",
          query: {
            id: song.id
          }
        });
      }
    },
    toggle() {
      this.showSelect = !this.showSelect;
    },
    ...mapActions(["selectPlay"]),
    ...mapMutations({
      setFullScreen: "SET_FULL_SCREEN"
    })
  },
  created() {},
  mounted() {
    if (!this.fullScreen && $(".mini-player").height()) {
      this.$refs.container.style.paddingBottom = `${heightMiniPlayer}px`;
    }
  }
};
</script>

<style scoped lang='less'>
@import url(~common/styles/variable.less);
.container {
  position: relative;
  width: 100%;
  overflow: hidden;
  .top {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .left {
      width: 15%;
      position: relative;
      padding-left: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      border-radius: 8px;
      background: #efeff4;
      .default {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        line-height: 60px;
        text-align: center;
        background: #ffffff;
      }
      .select {
        margin-top: 20px;
        li {
          background: #ffffff;
          text-align: center;
          padding: 20px 0;
        }
      }
    }
    .right {
      width: 85%;
    }
  }
  .list {
    background: #ffffff;
  }
  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .tips {
    padding-top: 30px;
    text-align: center;
  }
}
</style>
