import _axios from "../axios";
export default {
  // 获取主页轮播图的api
  getBanner: () => _axios("api/banner"),
  // 获取主页推荐歌单
  getRecommendSongList: () => _axios("api/personalized"),
  // 获取排行榜
  getToplistDetail: () => _axios("api/toplist/detail"),
  // 获取搜索推荐
  getSearchSuggestions: (userInput) => _axios(`api/search/suggest?keywords=${userInput}&type=mobile`)
};
