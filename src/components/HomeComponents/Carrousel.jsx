import React, { useState } from "react";
import useLanguage from "../../Hooks/useLanguage";
import CardProject from "../../components/ReutilizableComponents/CardProject";
import { styleContainer } from "../../Utilities/customStyles";
import { iconArrowLeft, iconArrowRight } from "../../Utilities/Icons";
import CarouselDots from "./CarouselDots";

const Carrousel = () => {
  // Se importan los textos con sus traducciones
  const { projectText } = useLanguage({ typeText: "projectText" });
  const { globalText } = useLanguage({ typeText: "globalText" });

  //estado para la card que se quiere visualizar
  const [indexCurrentCard, setIndexCurrentCard] = useState(0);
  const currentCard = projectText[indexCurrentCard];

  //estilo para la animacion
  const [styleNext, setStyleNext] = useState("");
  const [stylePrev, setStylePrev] = useState("");

  //logica y animacion para mover carousel hacia atras
  const handlerPrev = () => {
    setStylePrev("-translate-x-full");

    setTimeout(() => {
      setStylePrev("opacity-0 translate-x-full");

      setIndexCurrentCard((prev) =>
        prev > 0 ? prev - 1 : projectText.length - 1
      );

      setTimeout(() => {
        setStylePrev("");
      }, "200");
    }, "200");
  };

  //logica y animacion para mover carousel hacia adelante
  const handlerNext = () => {
    setStyleNext("translate-x-full");

    setTimeout(() => {
      setStyleNext("opacity-0 -translate-x-full");

      setIndexCurrentCard((prev) =>
        prev ===  projectText.length - 1 ? 0 : prev + 1
      );

      setTimeout(() => {
        setStyleNext("");
      }, "200");
    }, "200");
  };

  return (
    <main className={`${styleContainer} flex flex-col gap-10`}>
      <h2>{globalText.home.carrousel.title}</h2>

      <div className="w-full flex justify-center">
        <div className="flex justify-between items-center overflow-hidden w-full max-w-md">
          <div onClick={handlerPrev} className=" cursor-pointer">
            {iconArrowLeft}
          </div>

          <div className="flex flex-col items-center justify-center gap-5">
            <div
              className={`
          ${stylePrev} ${styleNext} 
            transition-transform ease-in-out duration-300 w-full flex justify-center 
          `}
            >
              <CardProject project={currentCard} />
            </div>

            <CarouselDots numberDots={projectText} currentDot={indexCurrentCard}/>
          </div>

          <div onClick={handlerNext} className=" cursor-pointer">
            {iconArrowRight}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Carrousel;
