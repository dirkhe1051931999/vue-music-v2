import home from "./restfulApi/home";
import playlist from "./restfulApi/playlist";
import play from "./restfulApi/play";
import search from "./restfulApi/search";
export default {
  ...home,
  ...playlist,
  ...play,
  ...search
};
