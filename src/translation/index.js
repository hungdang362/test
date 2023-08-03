import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-http-backend';
import translationEN from '../locales/en/translation.json';
import translationVI from '../locales/vi/translation.json';

const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI },
}

i18n
  .use(initReactI18next)
  .use(backend)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng") || 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;
  