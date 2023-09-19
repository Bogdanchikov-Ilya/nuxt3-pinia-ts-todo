// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || 'http://localhost:3000/',
        },
    },
  // plugins: ['~/plugins/editor.js'],
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: [
      'bootstrap/dist/css/bootstrap.css'
    ],
})
