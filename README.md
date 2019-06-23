# vue 仿网易云音乐

> 基于 vue-cli3 仿[网易云音乐](https://music.163.com/m/)

## 技术栈

1. vue-cli3、vue、vuex 等 vue 的全家桶，期间我尝试了 vue2.6 出的 observable api，作为非全局共享的跨组件响应式数据，用起来还不错，如果有兴趣，之前写了一篇[博客](https://github.com/dirkhe1051931999/hjBlog/tree/master/blog-vue/lessons/05.md)，介绍了下这个新 api
2. 使用[better-scroll](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/)解决移动端滚动场景，该库 build 后的文件大小是 63k,gz 之后是 9k，实际工作中也用了 better-scroll，完美兼容安卓 4.3 及 ios8，可以放心使用
3. 使用 less+[vw 移动端适配](https://github.com/dirkhe1051931999/common-demo/blob/master/webpack-study-notes/step8)
4. 使用[网易云音乐现成 node 接口](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%E6%8E%A8%E8%8D%90%E6%AD%8C%E5%8D%95)
5. [fastclick](https://github.com/ftlabs/fastclick)解决 300ms 延迟问题，[lazyload](https://github.com/verlok/lazyload)解决图片懒加载, [sprint](https://github.com/bendc/sprint)作为 dom 选择器，比起 zepto，没有了一些复杂的 dom 选择器，并且有的钩子函数性能比 zepto 强一点，readme 上给出了比较结果，其实也不经常用，主要还是用 ref 配合原生 js 使用
6. [ydui](http://vue.ydui.org/)作为项目的 UI 框架，这个框架比较基础，很容易理解和修改
7. [create-keyframe-animation](https://github.com/HenrikJoreteg/create-keyframe-animation/stargazers)处理 css3 动画
8. 使用[moment](https://github.com/moment/moment/stargazers)处理时间

## 实现功能

1. 推荐页
2. 歌单排行
3. 歌单推荐
4. 个人中心
5. 搜索页
6. 播放列表
7. 播放器/mini 播放器
8. ...

## 进度

- 2019-06-16 完成

1. 环境/项目搭建
2. vw 方案
3. 引入 font/css/css 变量/css 格式化
4. 推荐页
5. 排行榜
6. better-scroll 的封装

- 2019-06-22 完成

1. 播放列表
2. 优化了页面路由结构
3. 增加了数据的兜底处理

- 2019-06-23 完成

1. 全屏播放页面、拖拽进度条，以及全屏展开的时的动画
2. vuex 的初始化工作
3. 以类的方式格式化了当前播放歌曲
4. 页面的 loading 效果
5. 获取歌词接口挂掉了，暂时没写歌单
6. 计划删除路由的出入场动画，感觉比较鸡肋

## 参考

1. 借鉴了[黄轶](https://github.com/ustbhuangyi)的[Vue2.0 开发企业级移动端音乐 Web App](https://coding.imooc.com/class/107.html)中全屏播放器和 mini 播放器的实现思路
