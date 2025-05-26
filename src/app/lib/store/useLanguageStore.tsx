import { text } from "../utilities/Text";
import { create } from "zustand";
import { textLanguage } from "../utilities/types";

type LanguageState = {
  language: "es" | "en";
  toSpanish: () => void;
  toEnglish: () => void;
  textLanguage: textLanguage;
};

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "es",
  textLanguage: text.textEs,
  toSpanish: () => set(() => ({ language: "es", textLanguage: text.textEs })),
  toEnglish: () => set(() => ({ language: "en", textLanguage: text.textEn })),
}));
