// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
  pages: true, // Ensure pages mode is enabled
  devtools: { enabled: true },
  css: ["@esimonorepo/common-styles/index.scss"],
});
