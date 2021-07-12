export default {
  server: {
    port: 80,
    host: '0.0.0.0'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '二次猿',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '二次猿，二次猿博客，二次猿的技术博客' },
      { name: 'baidu-site-verification', content: 'code-sEPR2F4FM9' }
      // { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      src: '/js/prism.js',
      ssr: true
    }, {
      src: '/js/baidu-seo.js',
      ssr: true
    }, {
      src: 'https://pv.sohu.com/cityjson?ie=utf-8',
      ssr: true
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/animate.css',
    '~assets/css/element-ui.css',
    '~assets/css/markdown.css',
    '~assets/css/reset.css',
    '~assets/iconfont/iconfont.css',
    '~assets/css/body.css',
    'mavon-editor/dist/css/index.css'
  ],

  styleResources: {
    scss: [
      '~assets/css/theme.scss',
      '~assets/css/common.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/element-ui.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-atom-dark.css'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  },
  env: {
    // AXIOS_URL: process.env.NODE_ENV === 'production' ? 'https://api.erciape.com' : 'http://192.168.3.112:9501'
    AXIOS_URL: process.env.NODE_ENV === 'production' ? 'https://api.erciape.com' : 'http://192.168.0.115:9501'
  }
}
