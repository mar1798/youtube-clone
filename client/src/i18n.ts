import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEn from './locales/en/translationEn.json'
import translationRu from './locales/ru/translationRu.json'

export const resources = {
    en: {
        translation: translationEn
    },
    ru: {
        translation: translationRu
    }
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ru',
    debug: true,


    interpolation: {
        escapeValue: false,
    }
});


export default i18n;