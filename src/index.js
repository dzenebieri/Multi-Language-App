import './index.css';
import App from './App';
import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import { default as LanguageDetector } from 'i18next-browser-languagedetector';
import translationEN from "./locales/en/translation.json";
import translationDE from "./locales/de/translation.json";
import translationES from "./locales/es/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationKA from "./locales/ka/translation.json";
import translationRU from "./locales/ru/translation.json";

const resources = {
  en: { translation: translationEN, },
  de: { translation: translationDE, },
  es: { translation: translationES, },
  fr: { translation: translationFR, },
  ka: { translation: translationKA, },
  ru: { translation: translationRU, }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ar', 'de', 'es', 'fr', 'he', 'ka', 'ru'],
    fallbackLng: 'en',
    resources,
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);