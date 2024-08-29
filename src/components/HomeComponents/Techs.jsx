import React from "react";
import { styleContainer } from "../../Utilities/customStyles.js";
import useLanguage from "../../Hooks/useLanguage.js";
import TechMap from "./TechMap.jsx";

const Techs = () => {
  const {globalText} = useLanguage({typeText: "globalText"});
  const {techText} = useLanguage({typeText: "techText"});

  //se mapean todas las techs dentro de cada categoria
  return (
    <section className={styleContainer}>
      <h2>{globalText.home.Techs.title}</h2>
      <div className="font-light flex flex-col gap-5">
        <div>
          <h3>{globalText.home.Techs.titleTechs}</h3>
          <TechMap category={techText.technologies} />
        </div>
        <div>
          <h3>{globalText.home.Techs.titleFrameworks}</h3>
          <TechMap category={techText.frameworksLibraries} />
        </div>
        <div>
          <h3>{globalText.home.Techs.titleTools}</h3>
          <TechMap category={techText.tools} />
        </div>
        <div>
          <h3>{globalText.home.Techs.titleConcepts}</h3>
          <TechMap category={techText.conceptsMethodologies} />
        </div>
      </div>
    </section>
  );
};

export default Techs;
