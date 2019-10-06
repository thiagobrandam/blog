// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "thiagobrandam",
  siteUrl: 'https://thiagobrandam.com',
  siteDescription: 'This is the place where I snapshot my life into bytes.',
  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'src/content/writing/**/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: 'src/content/projects/*.md',
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/': {
            changefreq: 'monthly'
          },
          '/writing': {
            changefreq: 'weekly'
          },
          '/writing/*': {
            changefreq: 'weekly'
          },
          '/online-courses': {
            changefreq: 'weekly'
          },
          '/podcasts': {
            changefreq: 'weekly'
          },
          '/projects': {
            changefreq: 'weekly'
          },
          '/projects/*': {
            changefreq: 'weekly'
          },
          '/nihongo': {
            changefreq: 'weekly'
          },
          '/thiagobrandam': {
            changefreq: 'monthly'
          }
        }
      }
    }
  ],
  templates: {
    Post: '/writing/:year/:month/:day/:slug',
    Tag: '/tags/:id',
    Project: '/projects/:id'
  },
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
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
