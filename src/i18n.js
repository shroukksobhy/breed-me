import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const translationEn = {
    "pets": "Pets Available for Adoption",
    "loading": "Finding pets for you...",
    "about": "About",
    "privacy": "Privacy Policy",
    "location": "Location Address",
    "sign-up": "Sign Up",
    "login": "Login"
}
const translationAr = {
    "pets": "حيوانات أليفة متاحة للتبني",
    "loading": "جاري  البحث عن حيوانات أليفة",
    "about": "عن",
    "privacy": "الشروط والاحكام",
    "location": "العنوان",
    "sign-up": "إنشاء حساب",
    "login": "تسحيل دخول"
}
i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        // resources: {
        //     en: { translation: translationEn },
        //     ar: { translation: translationAr }
        // },
        fallbackLng: 'ar',
        debug: true,
        // lng: 'ar',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        detection: {
            order: ["path", "localStorage", "htmlTag", "cookie"],
            caches: ["localStorage", "cookie"], // cache user language on
        },
    });


export default i18n;