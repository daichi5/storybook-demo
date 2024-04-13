import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'myModule'
  },
  setup (options, nuxt) {
    console.log('Hello from myModule')
    console.log('myModule options', options)

    // register hook
    nuxt.hook('app:resolve', () => {
      console.log('app:resolve hook called')
    })

    // register plugin
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('plugin.ts'))
  }
})
