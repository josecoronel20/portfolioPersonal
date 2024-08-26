import React, { useRef, useState, useEffect } from "react";
import esProjects from "../../utilities/texts/projectText/esProjects.json";
import enProjects from "../../utilities/texts/projectText/enProjects.json";
import { useSelector } from "react-redux";
import CardProject from "../globalComponents/cardProject/CardProject";
import { styleCustomContainer } from "../../utilities/styles";
import { iconArrowLeft, iconArrowRight } from "../../utilities/Icons";
import useLanguage from "../Hooks/useLanguage";

const Carrousel = () => {
  const languageContext = useSelector((state) => state);
  let projects = languageContext === "es" ? esProjects : enProjects;

  const {language} = useLanguage();

  const [cardFocus, setCardFocus] = useState(2);
  const cardRef = useRef(null);


  //todo:arreglar scroll
  const handlerScrollIntoView = () => {
    if (cardRef[cardFocus]) {
      cardRef[cardFocus].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  useEffect(() => {
    handlerScrollIntoView();
  }, [cardFocus]);

  const handlerPrev = () => {
    setCardFocus((prev) => (prev > 1 ? prev - 1 : projects.length));
  };

  const handlerNext = () => {
    setCardFocus((prev) => (prev <= projects.length - 1 ? prev + 1 : 1));
  };

  return (
    <main
      className={`${styleCustomContainer} flex flex-col gap-5`}
    >
      <h2>{language.home.carrousel.title}</h2>
      <div className='flex justify-center items-center relative'>
      <div
        onClick={handlerPrev}
        className="absolute left-0 h-full content-center cursor-pointer p-5 bg-gradient-to-r from-darkDark from-50%"
      >
        {iconArrowLeft}
      </div>
      <div className="flex overflow-scroll no-scrollbar">
        {projects.map((project) => (
          <div
            key={project.id}
            ref={ cardRef[project.id]}
            className={`${cardFocus !== project.id ? "scale-75" : ""}`}
          >
            <CardProject
              key={project.id}
              id={project.id}
              title={project.title}
              imageUrl={project.imageUrl}
              isFinish={project.isFinish}
              techs={project.techs}
              description={project.description}
              siteUrl={project.siteUrl}
              detailUrl={project.detailUrl}
              repoUrl={project.repoUrl}
            />
          </div>
        ))}
      </div>
      <div
        onClick={handlerNext}
        className="absolute z-10 right-0 h-full content-center cursor-pointer p-5 bg-gradient-to-l from-darkDark from-50%"
      >
        {iconArrowRight}
      </div>
      </div>
    </main>
  );
};

export default Carrousel;
