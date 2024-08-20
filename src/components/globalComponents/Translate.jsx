import React from "react";
import { iconTranslate } from "../../utilities/Icons";
import { handlerChangeEnglish, handlerChangeSpanish } from "../context/store";
import { useSelector } from "react-redux";

const Translate = () => {
  const language = useSelector((state) => state);
  return (
    <div>
      {iconTranslate}
      <div>
        <p onClick={handlerChangeSpanish}>Español</p>
        <p onClick={handlerChangeEnglish}>English</p>
        <div>{language}</div>
      </div>
    </div>
  );
};

export default Translate;
