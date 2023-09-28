// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  pages: true,
  devtools: { enabled: true },
    modules: [
      '@nuxtjs/tailwindcss'
    ]
})
