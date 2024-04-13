import { useI18n } from 'vue-i18n'

export const useSample = () => {
  const {t} = useI18n()

  const state = ref('use Sample')

  const sampleMessage = computed(() => {
    return `${t('welcome')} ${state.value}`
  })

  return {
    sampleMessage
  }
}
