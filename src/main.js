import Vue from "vue";
import App from "./App.vue";
// 路由
import router from "./router/index.js";
// vuex
import store from "./store/index.js";
// 导入less文件
import "./common/styles/index.less";
// 引入fastclick
import Fastclick from "fastclick";
Fastclick.attach(document.body);
// lazyload
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require("./common/images/lazyload.jpg"),
  attempt: 1
});
// ydui
import { Confirm, Alert, Toast, Notify, Loading } from "vue-ydui/dist/lib.px/dialog";
Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading
};
import Loading1 from "components/loading/loading";
Vue.use(Loading1);
Vue.component("Loading1", Loading1);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: {
    Loading1
  },
  render: (h) => h(App)
}).$mount("#app");
