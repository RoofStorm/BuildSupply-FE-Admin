import { create } from 'zustand';
import i18n from 'i18next';
import { persist } from 'zustand/middleware';

type LanguageState = {
  language: string;
  setLanguage: (lng: string) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: i18n.language || 'vi', // default
      setLanguage: (lng: string) => {
        i18n.changeLanguage(lng);
        set({ language: lng });
      },
    }),
    {
      name: 'language-storage', // save in localStorage
    }
  )
);
