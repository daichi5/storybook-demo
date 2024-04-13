// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/storybook',
  ],
  components: [
    {
      path: '~/components',
    pathPrefix: false,
    }
  ],
  storybook: {
    url: 'http://localhost:6010',
    storybookRoute: '/__storybook__',
    port: 6006,
  },
})
