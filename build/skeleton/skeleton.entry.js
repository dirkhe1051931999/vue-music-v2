import SkeletonComponents from 'components/skeleton/install';
import Vue from 'vue';
import Skeleton from './skeleton.home.vue';

Vue.use(SkeletonComponents);
export default new Vue({
  components: {
    Skeleton,
  },
  template: '<skeleton />',
});