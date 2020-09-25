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
      { src: "/assets/js/materialize.min.js" }
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
    "@/assets/scss/styles/animate.min.css",
    "@/assets/scss/styles/fontawesome.min.css",
    "@/assets/scss/styles/style.scss",
    "@/assets/scss/styles/admin.scss",
    "@/assets/scss/styles/responsive.scss"
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
