// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Instrument Sans": [400, 500, 600, 700],
      Inter: [400, 500, 600, 700],
    },
  },
  srcDir: "app",
});
