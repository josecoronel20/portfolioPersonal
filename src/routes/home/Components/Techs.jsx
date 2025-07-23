import React from "react";
import { styleContainer } from "../../../Utilities/styles/customStyles.js";
import useLanguage from "../../../Hooks/useText.js";
import TechMap from "../../../components/HomeComponents/TechMap.jsx";

const Techs = () => {
  const { globalText } = useLanguage({ typeText: "globalText" });
  const { techText } = useLanguage({ typeText: "techText" });

  //componetizacion de containers segun categorias
  const ContainerCategory = ({ title, techs }) => {
    return (
      <div>
        <h3 className=" text-green text-center">{title}</h3>
        <TechMap category={techs} />
      </div>
    );
  };
  return (
    <section className={styleContainer}>
      <div className="flex flex-col pt-20 gap-10 justify-center items-center ">
        <h2>{globalText.home.Techs.title}</h2>
        <div className="font-light flex flex-col gap-20 md:grid md:grid-cols-2 lg:grid-cols-4">
          <ContainerCategory
            title={globalText.home.Techs.titleTechs}
            techs={techText.technologies}
          />
          <ContainerCategory
            title={globalText.home.Techs.titleFrameworks}
            techs={techText.frameworksLibraries}
          />
          <ContainerCategory
            title={globalText.home.Techs.titleTools}
            techs={techText.tools}
          />
          <ContainerCategory
            title={globalText.home.Techs.titleConcepts}
            techs={techText.conceptsMethodologies}
          />
        </div>
      </div>
    </section>
  );
};

export default Techs;
