import _axios from "../axios";
const limit = 15;
export default {
  // 获取播放列表
  getSearch: (keywords, type, page = 1) =>
    _axios("api/search", {
      keywords,
      type,
      limit,
      offset: (page - 1) * limit
    })
};
