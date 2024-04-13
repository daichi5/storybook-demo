import { createI18n } from "vue-i18n";


export default defineNuxtPlugin(({vueApp}) => {
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages: {
      en: {
        welcome: "Welcome to the Nuxt app"
      }
    }
  });

  vueApp.use(i18n);
});
