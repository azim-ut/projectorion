export default {
  mode: 'spa',
  generate: {
    dir: 'www'
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Project Orion',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: 'description',
        name: 'description',
        content: 'Проект Орион'
      }
    ],
    script: [
      { src: "/assets/js/materialize.min.js" },
      { src: "/assets/js/hammer.min.js" },
      { src: "/assets/js/jquery-1.10.2.min.js" },
      { src: "/assets/js/lazyload-1.3.min.js" },
      { src: "/assets/js/tilda-animation-1.0.min.js" },
      { src: "/assets/js/tilda-blocks-2.7.js" },
      { src: "/assets/js/tilda-forms-1.0.min.js" },
      { src: "/assets/js/tilda-menusub-1.0.min.js" },
      { src: "/assets/js/tilda-scripts-2.8.min.js" },
      { src: "/assets/js/tilda-slds-1.4.min.js" },
      { src: "/assets/js/tilda-zero-forms-1.0.min.js" },
      { src: "/assets/js/tilda-zoom-2.0.min.js" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/redirect-module"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/fontawesome.js", ssr: false },
    { src: "~/plugins/vue-carousel", ssr: false },
    { src: "~/plugins/vue-backtotop", ssr: false },
    { src: "~/plugins/vue-toastification", ssr: false },
    { src: "~/plugins/vueperslides", ssr: false }
  ],
  loading: { color: "#fff" },
  axios: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    debug: true,
    proxy: true
  },
  router: {
    linkActiveClass: "active"
  },
  fontawesome: {
    icons: [{ solid: ["faCog", "faHome"] }, { brands: ["faFacebook"] }]
  },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/main.css",
    "@/assets/css/tilda-animation-1.0.min.css",
    "@/assets/css/tilda-blocks-2.12.css",
    "@/assets/css/tilda-grid-3.0.min.css",
    "@/assets/css/tilda-menusub-1.0.min.css",
    "@/assets/css/tilda-slds-1.4.min.css",
    "@/assets/css/tilda-zoom-2.0.min.css",
    "@/assets/scss/styles/animate.min.css",
    "@/assets/scss/styles/fontawesome.min.css",
    "@/assets/scss/styles/style.scss",
    "@/assets/scss/styles/admin.scss",
    "@/assets/scss/styles/responsive.scss",
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    "@nuxtjs/fontawesome"
  ],
  proxy: {
    "/web": {
      target: "http://projectorion/"
    },
    "/assets": {
      target: "http://projectorion/"
    }
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
