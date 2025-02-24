import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: sessionStorage.getItem("lang") || "en",
    fallbackLng: "en",
    debug: true, // TODO: set debug to false for production
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
