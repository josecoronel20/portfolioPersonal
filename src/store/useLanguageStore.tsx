// import React, { createContext, useContext, useState, ReactNode } from "react";
// import { text } from "../utilities/Text";
// import { textLanguage } from "../utilities/types";

// //type de languageContext
// type LanguageContextType = {
//   language: string;
//   textLanguage: textLanguage;
//   changeToSpanish: () => void;
//   changeToEnglish: () => void;
// };

// //crea el contexto
// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// //crea el provider del contexto
// export const LanguageProvider = ({ children }: { children: ReactNode }) => {
//   //set de language en "es" o "en"
//   const [language, setLanguage] = useState<"es" | "en">("es");

//   //handlers para menejar el language
//   const changeToSpanish = () => setLanguage("es");
//   const changeToEnglish = () => setLanguage("en");

//   //elige el idioma segun contexto
//   const textLanguage = {
//     es: text.textEs,
//     en: text.textEn,
//   }[language] || text.textEn;

//   return (
//     <LanguageContext.Provider
//       value={{ language, textLanguage, changeToSpanish, changeToEnglish }}
//     >
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
//   return context;
// };

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
