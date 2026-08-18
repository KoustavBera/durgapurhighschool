import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English namespaces
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enAcademics from './locales/en/academics.json';
import enAdmissions from './locales/en/admissions.json';
import enFaculty from './locales/en/faculty.json';
import enGallery from './locales/en/gallery.json';
import enNews from './locales/en/news.json';
import enNotices from './locales/en/notices.json';

// Bengali namespaces
import bnCommon from './locales/bn/common.json';
import bnHome from './locales/bn/home.json';
import bnAbout from './locales/bn/about.json';
import bnAcademics from './locales/bn/academics.json';
import bnAdmissions from './locales/bn/admissions.json';
import bnFaculty from './locales/bn/faculty.json';
import bnGallery from './locales/bn/gallery.json';
import bnNews from './locales/bn/news.json';
import bnNotices from './locales/bn/notices.json';

export const SUPPORTED_LANGUAGES = ['en', 'bn'];
export const LANGUAGE_STORAGE_KEY = 'dhs-language';

export const resources = {
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    academics: enAcademics,
    admissions: enAdmissions,
    faculty: enFaculty,
    gallery: enGallery,
    news: enNews,
    notices: enNotices,
  },
  bn: {
    common: bnCommon,
    home: bnHome,
    about: bnAbout,
    academics: bnAcademics,
    admissions: bnAdmissions,
    faculty: bnFaculty,
    gallery: bnGallery,
    news: bnNews,
    notices: bnNotices,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES,
    // Bengali resources are hand-authored; never fall back to a region variant.
    load: 'languageOnly',
    ns: Object.keys(resources.en),
    defaultNS: 'common',
    detection: {
      order: ['localStorage', 'htmlTag', 'navigator'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: ['localStorage'],
    },
    interpolation: {
      // React already escapes interpolated values.
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Keep <html lang> in sync so screen readers announce Bengali with the right voice
// and `font-bengali-body` / :lang() styling applies document-wide.
const applyDocumentLanguage = (lng) => {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('lang', lng);
};

applyDocumentLanguage(i18n.resolvedLanguage || 'en');
i18n.on('languageChanged', applyDocumentLanguage);

export default i18n;
