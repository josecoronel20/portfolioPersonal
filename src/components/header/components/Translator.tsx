import React from "react";
import { iconTranslate } from "../../../utilities/icons/Icons";
import { useToggle } from "../../../Hooks/useToggle";
import { useContextLanguage } from "../../../Context/ContextLanguage";
import useText from "../../../Hooks/useText"

const Translate = () => {
  //uso de customhook para utilizar un estado toggle
  const { isToggleOpen, handlerToggle, setIsToggleOpen } = useToggle();

  //llamada al context del lenguaje
  const {currentLanguage,setCurrentLanguage} = useContextLanguage()

  //llama a el hook de los textos
  const text = useText()

  return (
    <div className="">
      <div
        className="flex align-middle gap-1 text-lightLight content-center cursor-pointer"
        onClick={handlerToggle}
      >
        <div>{iconTranslate}</div>
        <div>{currentLanguage.toUpperCase()}</div>
      </div>
      <div className={`${isToggleOpen === false && "hidden"}`}>
        <p
          className="text-lightLight opacity-40 cursor-pointer hover:opacity-100"
          onClick={() => {
            handlerChangeSpanish();
            setIsToggleOpen(false);
          }}
        >
          ESPAÑOL
        </p>
        <p
          className="text-lightLight opacity-40 cursor-pointer hover:opacity-100"
          onClick={() => {
            handlerChangeEnglish();
            setIsToggleOpen(false);
          }}
        >
          ENGLISH
        </p>
      </div>
    </div>
  );
};

export default Translate;
