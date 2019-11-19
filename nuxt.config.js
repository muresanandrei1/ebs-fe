const colors = require("vuetify/es5/util/colors").default;

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: "Energy Branching Solutions",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: `In domeniul instalațiilor electrice SC Energy Branching Solutions SRL vine in fata
          dumneavoastra cu o echipa bine consolidata, alcatuita din profesionisti.
          `
      },
      {
        hid: "title",
        name: "title",
        content: "Energy Branching Solutions"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  serverMiddleware: [{ path: "/email/send", handler: "~/service/email" }],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~plugins/datepicker", ssr: false },
    { src: "~plugins/vuelidate" }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/proxy",
      {
        pathRewrite: { "^/api": "" }
      }
    ]
  ],
  proxy: {
    "/api": "http://localhost:1337"
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: "#d93732",
      accent: "#f0897f",
      secondary: "#fff",
      info: "#2196f3",
      warning: "#ff5252",
      error: "#ff5252",
      success: "#4caf50"
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
