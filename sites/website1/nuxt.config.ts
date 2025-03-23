// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  extends: [
    '../base', // Extend from a local layer
  ],
  typescript: {
    includeWorkspace: true, //alows typescript types to be resolved from base layer
  },
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/styles/main.scss'],
});
