import { languages } from "@/types/i18n";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(backend)
  .init({
    debug: true,
    lng: languages.en.code,
    fallbackLng: languages.en.code,
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
    ns: ["common", "farm-setup-pages", "landing-page"],
    returnObjects: true,
    defaultNS: "common",
  });
