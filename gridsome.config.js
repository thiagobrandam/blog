// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "thiagobrandam",
  siteUrl: 'https://thiagobrandam.com',
  siteDescription: 'This is the place where I snapshot my life into bytes.',
  plugins: [],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  icon: {
    favicon: './src/assets/images/favicon.png',
    touchicon: './src/assets/images/apple-touch-icon.png'
  }
}
