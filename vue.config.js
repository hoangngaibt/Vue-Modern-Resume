module.exports = {
  // publicPath      : process.env.NODE_ENV === 'production' ? '/' : '/',
  configureWebpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test   : require('path').resolve(__dirname, 'node_modules/leader-line/'),
        loader : 'skeleton-loader',
        options: { procedure: (content) => `${content} export default LeaderLine` },
      },
    ]
  },
}
