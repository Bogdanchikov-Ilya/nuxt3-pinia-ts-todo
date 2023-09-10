// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || 'http://localhost:3000/',
        },
    },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: [
      'bootstrap/dist/css/bootstrap.css'
    ],
})
