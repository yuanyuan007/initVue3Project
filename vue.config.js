const path = require('path');
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
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('static', resolve('src/static'))
  }
}