import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    lng: 'ja-JP',
    fallbackLng: 'ja-JP',
    // debug: true,
    defaultNS: 'common',
  });

const supportedLangs = ['ja-JP'];
const namespaces = [
  'layout',
];

supportedLangs.forEach((lang) => {
  namespaces.forEach((ns) => {
    i18n.addResourceBundle(
      lang,
      ns,
      require(`../../public/locales/${lang}/${ns}.json`)
    )
  })
})
export default i18n
