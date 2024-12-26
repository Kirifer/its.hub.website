// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Futura: true, 
      Lato: [400, 700], 
    },
  },
  srcDir: "app",
});
