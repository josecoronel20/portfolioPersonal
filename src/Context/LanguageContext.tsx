import React, { createContext, useContext, useState, ReactNode } from "react";
import { text } from "../utilities/Text";
import { textLanguage } from "../types";

type LanguageContextType = {
  language: string;
  textLanguage: textLanguage;
  changeToSpanish: () => void;
  changeToEnglish: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const changeToSpanish = () => setLanguage("es");
  const changeToEnglish = () => setLanguage("en");

  const textLanguage = {
    es: text.textEs,
    en: text.textEn,
  }[language] || text.textEn;

  return (
    <LanguageContext.Provider
      value={{ language, textLanguage, changeToSpanish, changeToEnglish }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
};
