import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'Recommend',
      component: () => import('views/recommendPage/index'),
      meta: {
        name: '',
      },
      children: [
        {
          path: 'privatefm',
          name: 'PrivateFM',
          component: () => import('views/recommendPage/privateFM'),
          meta: {
            name: '私人FM',
          },
        },
        {
          path: 'dailyrecommend',
          name: 'DailyRecommend',
          component: () => import('views/recommendPage/dailyRecommend'),
          meta: {
            name: '每日推荐',
          },
        },
        {
          path: 'song',
          name: 'Song',
          component: () => import('views/recommendPage/song'),
          meta: {
            name: '歌单',
          },
        },
        {
          path: 'rank',
          name: 'Rank',
          component: () => import('views/recommendPage/rank'),
          meta: {
            name: '排行榜',
          },
        },
      ],
    },
    {
      path: '/search',
      name: 'Search',
      meta: {
        name: '搜索',
      },
      component: () => import('views/searchPage/index'),
    },
    {
      path: '/user',
      name: 'User',
      meta: {
        name: '个人中心',
      },
      component: () => import('views/userCenterPage/index'),
    },
    {
      path: '/playlist',
      name: 'Playlist',
      meta: {
        name: '播放列表',
      },
      component: () => import('views/playlistPage/playlist'),
    },
  ],
});