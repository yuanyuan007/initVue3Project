const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  baseUrl: './',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://y96xc7.natappfree.cc/smart_sand/',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      },
      '/ms': {
        target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
        changeOrigin: true
      }
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch'); //关闭预先加载模块
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('static', resolve('src/static'));
    if(process.env.NODE_ENV === 'production') {
      if(process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end();
        config.plugins.delete('prefetch')
      }
    }
  },
  configureWebpack: (config) => {
    if(process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/, //匹配文件名
          threshold: 10240, //对超过10k的数据进行压缩
          deleteOriginalAssets: false //是否删除原文件
        })]
      }
    }
  }
}