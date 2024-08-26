import React from "react";
import { styleCustomContainer } from "../../../utilities/styles";
import useLanguage from "../../Hooks/useLanguage";
import TechMap from "./TechMap";
import { useSelector } from "react-redux";
import techTextEn from "../../../utilities/texts/techsText/techsEn.jsx";
import techTextEs from "../../../utilities/texts/techsText/techsEs.jsx";

const Techs = () => {
  const { language } = useLanguage();
  //TODO:simplificar la importacion de textos
  const context = useSelector((state) => state);
  const techText = context === "es" ? techTextEs : techTextEn;

  //se mapean todas las techs dentro de cada categoria
  return (
    <section className={styleCustomContainer}>
      <h2>{language.home.Techs.title}</h2>
      <div className="font-light flex flex-col gap-5">
        <div>
          <h3>{language.home.Techs.titleTechs}</h3>
          <TechMap category={techText.technologies} />
        </div>
        <div>
          <h3>{language.home.Techs.titleFrameworks}</h3>
          <TechMap category={techText.frameworksLibraries} />
        </div>
        <div>
          <h3>{language.home.Techs.titleTools}</h3>
          <TechMap category={techText.tools} />
        </div>
        <div>
          <h3>{language.home.Techs.titleConcepts}</h3>
          <TechMap category={techText.conceptsMethodologies} />
        </div>
      </div>
    </section>
  );
};

export default Techs;
