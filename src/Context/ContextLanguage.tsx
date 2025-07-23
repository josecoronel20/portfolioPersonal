import React, { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

interface ContextLanguageProps {
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
}

const ContextLanguage = createContext<ContextLanguageProps | null>(null);

export const ContextLanguageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentLanguage, setCurrentLanguage] = useState("es");

  return (
    <ContextLanguage.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </ContextLanguage.Provider>
  );
};

export const useContextLanguage = () => {
  const context = useContext(ContextLanguage);
  if (!context) {
    throw new Error("useContextLanguage debe ser usado dentro del provider");
  }
  return context;
};
