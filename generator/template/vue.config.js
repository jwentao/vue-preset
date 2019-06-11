module.exports = {
  pages: {
    index: {
      entry: 'src/pages/index/index.js',
      template: 'src/pages/index/index.html',
      env: process.env.VUE_APP_BUILD,
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  productionSourceMap: false,
  devServer: {
  }
};
