const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
// 开启gzip
const CompressionPlugin = require('compression-webpack-plugin');
// Webpack包文件分析器
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/163-music' : '/',
  outputDir: 'dist',
  assetsDir: 'public',
  indexPath: 'index.html',
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 9102,
    https: false,
    hotOnly: false,
    before: (app) => {},
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('config', resolve('src/config'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'));
  },
  configureWebpack: (config) => {
    let pluginsPro = [
      new CompressionPlugin({
        //文件开启Gzip，也可以通过服务端(如：nginx)(https://github.com/webpack-contrib/compression-webpack-plugin)
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
        threshold: 8192,
        minRatio: 0.8,
      }),
      new BundleAnalyzerPlugin(),
    ];
    //开发环境
    let pluginsDev = [];
    if (process.env.NODE_ENV === 'production') {
      console.log('生产环境');
      config.plugins = [...config.plugins, ...pluginsPro];
    } else if (process.env.NODE_ENV === 'development') {
      console.log('开发环境');
      config.plugins = [...config.plugins, ...pluginsDev];
    }
  },
  css: {
    // 是否开启 CSS source map？
    sourceMap: process.env.NODE_ENV !== 'production',
    modules: false,
    loaderOptions: {
      // sass配置
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/common/styles/variable.scss";
        `,
      },
    },
  },
};