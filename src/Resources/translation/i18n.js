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
            stocksStrategy: "Publication of long-term value investing strategies and concentrating capital in large US companies. Our idea is to concentrate capital in no more than 10 high-value companies operating in different sectors.",
            secondSection: "We invest in companies that have a recognized brand in their sector, good future prospects and that treat the shareholder well."
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
            stocksStrategy: "Publicación de estrategias de inversión en valor (value investing) a largo plazo y concentrando el capital en grandes compañías estadounidenses. Nuestra idea es concentrar el capital en no más de 10 compañías de alto valor que operen en distintos sectores.",
            secondSection: "Invertimos en empresas que tengan una marca reconocida en su sector, buenas perspectivas de futuro y que traten bien al accionista."
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