import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Provider } from 'react-redux';
import { store } from '@/app/store/store';
import type { InitPayload } from '@/app/store/dataSlice';
import Layout from '@app/layout/Layout.tsx';

export const LANGUAGES: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: Object.keys(LANGUAGES),
    fallbackLng: 'en',
    debug: false,
    backend: { loadPath: 'locales/{{lng}}/{{ns}}.json', },
    interpolation: { escapeValue: false, },
    saveMissing: false,
  });

export default function App({ data }: { data: InitPayload }) {
  return (
    <Provider store={store}>
      <Layout data={data} />
    </Provider>
  );
}