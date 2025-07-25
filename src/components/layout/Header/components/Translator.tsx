import React from "react";
import { iconTranslate } from "@/constants/Icons";
import { useToggle } from "@/hooks/useToggle";
import { useLanguageStore } from "@/store/useLanguageStore";

//Componente Translator que renderiza el botón de traducción.
const Translate = ():JSX.Element => {
  const { isToggleOpen, handlerToggle, setIsToggleOpen } = useToggle();
  const language = useLanguageStore((state) => state.language);
  const toSpanish = useLanguageStore((state) => state.toSpanish);
  const toEnglish = useLanguageStore((state) => state.toEnglish);

  return (
    <div className="">
      <div
        className="flex align-middle gap-1 text-lightLight content-center cursor-pointer"
        onClick={handlerToggle}
      >
        <div>{iconTranslate}</div>
        <div>{language.toUpperCase()}</div>
      </div>
      <div className={`${isToggleOpen === false && "hidden"}`}>
        <p className="text-lightLight opacity-40 cursor-pointer hover:opacity-100" onClick={() => {toSpanish();setIsToggleOpen(false);}}>ESPAÑOL</p>
        <p className="text-lightLight opacity-40 cursor-pointer hover:opacity-100" onClick={() => {toEnglish();setIsToggleOpen(false);}}>ENGLISH</p>
      </div>
    </div>
  );
};

export default Translate;
