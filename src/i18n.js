import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import uz from "./messages/uz.json"
import ru from "./messages/ru.json"
import en from "./messages/en.json"

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    ru: { translation: ru },
    en: { translation: en }
  },
  lng: "uz",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
})

export default i18n