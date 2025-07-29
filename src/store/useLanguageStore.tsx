import { text } from "../constants/Text";
import { create } from "zustand";

interface LanguageState {
  language: "es" | "en"; // Language of the application
  toSpanish: () => void; // Function to change the language to spanish
  toEnglish: () => void; // Function to change the language to english
  textLanguage: typeof text.textEs; // Text of the language
}

// Store to handle the language of the application
export const useLanguageStore = create<LanguageState>((set) => ({
  language: "es", // Language by default
  textLanguage: text.textEs, // Text by default
  toSpanish: (): void =>
    set(() => ({ language: "es", textLanguage: text.textEs })), // Change to spanish
  toEnglish: (): void =>
    set(() => ({ language: "en", textLanguage: text.textEn })), // Change to english
}));
