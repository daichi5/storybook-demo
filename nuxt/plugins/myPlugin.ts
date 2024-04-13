export default defineNuxtPlugin({
  name: 'my-plugin',
  async setup (nuxtApp) {
    // this is the equivalent of a normal functional plugin
    console.log('setup called in my-plugin')

    return {
      provide: {
        myHelper: (msg: string) => (`${msg} from my-plugin`)
      }
    }
  },
  hooks: {
    // You can directly register Nuxt app runtime hooks here
    'app:created'() {
      const nuxtApp = useNuxtApp()
      // do something in the hook
      console.log('app:created hook called in my-plugin')
    },

    "vue:setup": () => {
      // do something in the hook
      console.log('vue:setup hook called in my-plugin')
    }
  },
})
