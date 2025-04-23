import React from "react";
import { styleContainer } from "../../Utilities/customStyles.js";
import TechMap from "./TechMap.jsx";
import { useLanguage } from "../../Context/LanguageContext.js";

const Techs = () => {
  const { textLanguage } = useLanguage();

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
        <h2>{textLanguage.home.techsAndSkills.title}</h2>
        <div className="font-light flex flex-col gap-20 md:grid md:grid-cols-2 lg:grid-cols-4">
          {textLanguage.home.techsAndSkills.sections.map((section,index) => {
            return <ContainerCategory 
            key={index}
            title={section.title}
            techs={section.list}
            />
          })}
        </div>
      </div>
    </section>
  );
};

export default Techs;
