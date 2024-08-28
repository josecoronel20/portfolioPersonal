import React from "react";
import { iconTranslate } from "../../utilities/Icons";
import { handlerChangeEnglish, handlerChangeSpanish } from "../../languageContext";
import { useToggle } from "../../Hooks/useToggle";
import { useSelector } from "react-redux";

const Translate = () => {
  //uso de customhook para utilizar un estado toggle
  const { isToggleOpen, handlerToggle, setIsToggleOpen } = useToggle();

  //llamada al context del lenguaje
  const language = useSelector((state) => state);

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
        <p className="text-lightLight opacity-40 cursor-pointer hover:opacity-100" onClick={() => {handlerChangeSpanish();setIsToggleOpen(false);}}>ESPAÑOL</p>
        <p className="text-lightLight opacity-40 cursor-pointer hover:opacity-100" onClick={() => {handlerChangeEnglish();setIsToggleOpen(false);}}>ENGLISH</p>
      </div>
    </div>
  );
};

export default Translate;
