import pt from 'vuetify/src/locale/pt';

require('dotenv').config({ path: './config/.env' });

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Paths
  srcDir: 'src/',
  dir: {
    pages: 'ui/pages',
    components: 'ui/core/components',
    plugins: 'ui/core/plugins',
    assets: 'ui/core/assets',
    layouts: 'ui/core/layouts',
    middleware: 'ui/core/middleware',
    static: 'ui/core/static',
    store: 'ui/store',
  },
  generate: {
    dir: process.env.BUILD_DIR || 'dist',
  },
  vue: {
    config: {
      devtools: process.env.NODE_ENV === 'development',
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Portifolio',
    title: 'Portifolio',
    htmlAttrs: {
      lang: 'pt',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/ui/core/plugins/animate.css.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/ui/core/components', extensions: ['vue'] }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [['@nuxtjs/dotenv', { path: './config' }]],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/ui/core/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {},
        dark: {},
      },
    },
    lang: {
      locales: { pt },
      current: 'pt',
    },
  },

  /*
   ** Router config
   */
  router: {
    mode: 'hash',
    base: process.env.ROUTER_BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
