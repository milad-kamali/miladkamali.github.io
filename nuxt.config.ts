// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  css: ["@/assets/css/style.css"],
  app: {
    baseURL: '/miladkamali.github.io/',
    head: {
      meta: [
        {charset: "utf-8"},
        { name: "description", content: "Milad Kamali, Web Developer, Interested to web development, Frontend developer by Vue js and Backend development Laravel." },
        { name: "keywords", content: "Milad Kamali, Web Developer, Front end developer, software engineer, vue js developer, vishca, میلاد کمالی, توسعه دهنده فرانت اند" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#122239" }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' }
      ]
    },
    pageTransition: {name: 'page', mode: 'in-out'}
  },
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js")
    }
  }
  // routeRules: {
  //   '/admin/**': { ssr: false }
  // }
})
