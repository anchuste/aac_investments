import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'es',
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          home:{
            stocksStrategy: "Investment strategies publication of AAC private investor funds for 2021 and 2022 with the aim of returning profits in 2-3 years. Our portfolio information is in the Portfolio section.",
            secondSection: "On the other hand, the Track record section shows the entire investment history of the fund."
          },
          nav:{
            home: "Home",
            portfolio: "Portfolio",
            trackrecord: "Trackrecord",
            about: "About"
          }

          // here we will place our translations...
        }
      },
      es: {
        translation: {
          home:{
            stocksStrategy: "Publicación de las estrategias de inversión de los fondos del inversionista privado AAC para los años 2021 y 2022 con objetivo de retornar beneficios en 2-3 años. La información de nuestra cartera se encuentra en la sección Portfolio.",
            secondSection: "Por otro lado, en la sección Track record se muestra todo el historial de inversiones del fondo."
          },
          nav:{
            home: "Inicio",
            portfolio: "Cartera",
            trackrecord: "Historial",
            about: "Acerca de"
          }
          // here we will place our translations...
        }
      },
    }
  });

export default i18n;