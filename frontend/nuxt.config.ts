// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    'vue3-carousel-nuxt',
    'nuxt-marquee',
  ],
  colorMode: {
      classSuffix: ''
  },
  css: [
    '~/assets/css/main.css',
  ],
});