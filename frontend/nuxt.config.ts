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
    'nuxt-headlessui',
    'floating-vue/nuxt',
  ],
  colorMode: {
      classSuffix: ''
  },
  css: [
    '~/assets/css/main.css',
  ],
});