const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: true,
  chainWebpack: config => {
    config.resolve.alias
    .set('@', resolve('src'))
  }
}
