import _axios from '../axios';
export default {
  // 获取主页轮播图的api
  getBanner: () => _axios('/banner'),
  // 获取主页推荐歌单
  getRecommendSongList: () => _axios('/personalized'),
  // 获取排行榜
  getToplistDetail: () => _axios('/toplist/detail'),
  // 获取搜索推荐
  getSearchSuggestions: (userInput) => _axios(`/search/suggest?keywords=${userInput}&type=mobile`),
};