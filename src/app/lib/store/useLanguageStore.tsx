import { text } from "../utilities/Text";
import { create } from "zustand";
import { textLanguage } from "../utilities/types";

interface LanguageState {
  language: "es" | "en"; // Idioma actual de la aplicación
  toSpanish: () => void; // Función para cambiar el idioma a español
  toEnglish: () => void; // Función para cambiar el idioma a inglés
  textLanguage: textLanguage; // Texto actual del idioma
}

// Store para manejar el idioma de la aplicación
export const useLanguageStore = create<LanguageState>((set) => ({
  language: "es", // Idioma por defecto
  textLanguage: text.textEs, // Texto por defecto
  toSpanish: (): void =>
    set(() => ({ language: "es", textLanguage: text.textEs })), // Cambiar a español
  toEnglish: (): void =>
    set(() => ({ language: "en", textLanguage: text.textEn })), // Cambiar a inglés
}));
