import i18n from './config/i18n'
require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bestellgastro: Innovative Online Payment Gateway. e-Pay your way',
    htmlAttrs: {
      lang: 'en-US',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'user-scalable=no, width=device-width, initial-scale=1',
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'bestellgastro| we make it easy for everyone to make secure online payments. Experience the latest payment solutions. shop and pay',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'mobile payment gateway, mobile payment gateway integration, mobile payment gateways, mobile payment services, money gateway, money transfer payment gateway, my bestellgastro android app, my bestellgastro android application, my bestellgastro app, my bestellgastro ios app, my bestellgastro ios application, need payment gateway, network online payment gateway, network payment gateway, new payment gateway, online business payments, online direct payment, online gateway payment services, online gateway providers, online merchant gateway, online merchant payment gateway, online pay services, online payment, online payment accounts, online payment api, online payment app, online payment checkout, online payment ecommerce, online payment gateway, online payment gateway api, online payment gateway integration, online payment gateway providers, online payment gateway service providers, online payment integration, online payment interface, online payment merchant, online payment merchant account, online payment merchant services, online payment platforms, online payment provider, online payment solutions, online payment vendors, online payments companies, online platform payment, online store payment gateway, our products, pay by bank account information, pay by bank card, pay by link ,pay by QR code, pay by social media link, pay checkout, pay gateway, pay now payment gateway, pay payment gateway, Pay the bestellgastro way, payment apps for small businesses, payment by mobile phone, payment ecommerce, payment gateway, payment gateway account, payment gateway acquirer, payment gateway app, payment gateway application, payment gateway authentication, payment gateway b2b, payment gateway bank transfer, payment gateway business, payment gateway business model, payment gateway business plan, payment gateway checkout, payment gateway company, payment gateway design, payment gateway documentation, payment gateway ecommerce, payment gateway fintech, payment gateway in app, payment gateway in e commerce, payment gateway in middle east, payment gateway industry, payment gateway information, payment gateway integration, payment gateway integration in android, payment gateway integration in ecommerce, payment gateway integration in mobile application, payment gateway interface, payment gateway is, payment gateway link, payment gateway market, payment gateway merchant account, payment gateway middle east, payment gateway mobile app, payment gateway model, payment gateway name',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'google-site-verification',
        content: 'HNFEi9dqqeKeExzEhcQ2kGmBaEnW9WT7Fklyaw13kf4',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/bestellgastrologosticker.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap',
      },
    ],
  },

  ssr: true,

  loading: '~/components/Loader/Loader.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/_reset.scss',
    '~/assets/fonts/aljazeera.css',
    '~/assets/fonts/roboto.css',
    '~/assets/fonts/Merriweather.css',
    '~/assets/fonts/Lobster.css'
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-carousel', mode: 'client' },
    { src: '~/plugins/vue-slick-carousel', ssr: false },
    { src: '~/plugins/lottie-vue-player', mode: 'client' },
    { src: '~/plugins/vue-flatpicker', mode: 'client' },
    { src: '~/plugins/repositories.js' },
    { src: '~/plugins/error-handler.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/vee-validate' },
    { src: '~/plugins/aos', mode: 'client' },
    { src: '~/plugins/vue-good-table', ssr: false },
    { src: '~/plugins/vue-editor', ssr: false },
    { src: '~/plugins/date-filter', ssr: false },
    { src: '~/plugins/GoogleAnalytics.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/LandingPage/',
        prefix: 'LandingPage',
      },
      {
        path: '~/components/UI/',
        prefix: 'UI',
      },
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        vueI18nLoader: true,
        defaultLocale: 'en',
        detectBrowserLanguage: false,
        baseUrl: 'https://bestellgastro.talentxpro.de/',
        seo: true,
        parsePages: false,
        pages: {
          admin: false,
        },
        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en-US',
          },
          {
            code: 'ar',
            name: 'العربية',
            iso: 'ar-AR',
          },
        ],
        vueI18n: i18n,
      },
    ],
    '@modules/generator',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/style-resources',
    'vue2-editor/nuxt',
    [
      'vue-scrollto/nuxt',
      {
        duration: 3200,
        easing: 'ease-out',
        lazy: false,
        offset: 0,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true,
      },
    ],
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://bestellgastro.talentxpro.de/',
    gzip: true,
    trailingSlash: true,
    exclude: ['/admin', '/ar/admin', '/admin/**', '/ar/admin/**'],
  },

  styleResources: {
    scss: ['~/assets/_mixins.scss', '~/assets/_variables.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://bestellgastro.talentxpro.de/api/',

    // proxy: true,
    // prefix: '/api/',
  },

  // proxy: {
  //   '/api/': { target: 'http://127.0.0.1:4433' },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
    publicPath: 'https://bestellgastro.talentxpro.de/',//newww
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true,
      },
    },
  },

  auth: {
    localStorage: false,
    watchLoggedIn: true,

    redirect: {
      login: '/admin',
      logout: false,
      callback: '/admin',
      home: '/admin/hero-section',
    },

    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'public/auth/login',
            method: 'post',
            propertyName: 'response.data.accessToken',
          },

          user: {
            url: 'private/user/profile',
            method: 'get',
            propertyName: 'response',
          },

          logout: false,
        },
        // tokenRequired: true,
      },
    },
  },
  
}
