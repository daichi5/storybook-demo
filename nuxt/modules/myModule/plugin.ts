
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Hello from myPlugin')

  // register hook
  nuxtApp.hook('app:created', () => {
    console.log('app:created hook called')
  })
})
