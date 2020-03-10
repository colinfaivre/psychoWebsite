
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jean-Yves Gauthier : Psychanalyste - Psychologue clinicien à Limoges',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // Google Search
      { hid: 'description', name: 'description', content: 'Votre psychanalyste / psychologue clinicien à Limoges' },
      { hid:'keywords', name: 'keywords', content: 'Jean-Yves Gauthier, limoges, psychologue, psychanalyste, psychologue limoges, psychanalyste limoges' },
      // OpengGraph image (social media sharable)
      { property: 'og:image', content: '/og-image.png' },
      { property: 'og:image:width', content: '750' },
      { property: 'og:image:height', content: '376' },
      { property: 'og:description', content: 'Votre psychanalyste / psychologue clinicien à Limoges' },
      { property: 'og:url', content: 'https://jeanyves-gauthier-psychanalyste.com' },
      { property: 'og:title', content: 'Jean-Yves Gauthier' },
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'preconnect', href: 'https://maps.googleapis.com' },
      { rel: 'preconnect', href: 'https://maps.gstatic.com' },
      { rel: 'preconnect', href: 'https://khms0.googleapis.com' },
      { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://www.google.com' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#303130' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue2-smooth-scroll.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  pwa: {
    manifest: {
      "short_name": "Jean-Yves Gauthier",
      "name": "Jean-Yves Gauthier",
      "lang": "fr",
      "background_color": "#303030",
      "display": "standalone",
      "theme_color": "#303030"
    },
  },
  workbox: {
    offlineAssets: ['/index.html', '/legal/index.html'],
    offlinePage: '/404.html',
  },
  generate: {
    fallback: true,
  },
  styleResources: {
    scss: [
      'assets/scss/main.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
