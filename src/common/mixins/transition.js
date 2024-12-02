export let transition = {
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  beforeRouteUpdate(to, from, next) {
    let isBack = this.$router.isBack;
    if (isBack) {
      this.transitionName = 'slide-right';
    } else {
      this.transitionName = 'slide-left';
    }
    this.$router.isBack = false;
    next();
  },
};