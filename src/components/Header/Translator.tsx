import React from "react";
import { iconTranslate } from "../../utilities/Icons";
import { useToggle } from "../../hooks/useToggle";
import { useLanguage } from "../../context/LanguageContext";

const Translate = ():JSX.Element => {
  //uso de customhook para utilizar un estado toggle
  const { isToggleOpen, handlerToggle, setIsToggleOpen } = useToggle();

  //hook que importa el texto segun idioma
  const {language, changeToEnglish,changeToSpanish} = useLanguage()
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
        <p className="text-lightLight opacity-40 cursor-pointer hover:opacity-100" onClick={() => {changeToSpanish();setIsToggleOpen(false);}}>ESPAÑOL</p>
        <p className="text-lightLight opacity-40 cursor-pointer hover:opacity-100" onClick={() => {changeToEnglish();setIsToggleOpen(false);}}>ENGLISH</p>
      </div>
    </div>
  );
};

export default Translate;
