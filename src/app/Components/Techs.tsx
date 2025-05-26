"use client"

import React from "react";
import { styleContainer } from "@/app/lib/utilities/customStyles";
import { tech } from "@/app/lib/utilities/types";
import TechHover from "@/app/Components/TechHover";
import { useLanguageStore } from "@/app/lib/store/useLanguageStore";

const Techs = () => {
  //importa el idioma del store
  const { textLanguage } = useLanguageStore();

  //componetizacion de containers segun categorias
  const ContainerCategory = ({ title, techList }:{title:string,techList:tech[]}):JSX.Element => {
    return (
      <div className="flex flex-col gap-4 ">
        <h3 className=" text-green text-center">{title}</h3>
        <div className="grid grid-cols-2 gap-5">{techList.map((tech:tech) => {
          return <TechHover key={tech.id} techProp={tech}/>
        })}</div>
      </div>
    );
  };
  return (
    <section className={styleContainer}>
      <div className="flex flex-col pt-20 gap-10 justify-center items-center ">
        <h2>{textLanguage.home.techsAndSkills.title}</h2>
        <div className="font-light flex flex-col gap-20 md:grid md:grid-cols-2 lg:grid-cols-4">
          {textLanguage.home.techsAndSkills.sections.map((section, index) => {
            return (
              <ContainerCategory
                key={index}
                title={section.title}
                techList={section.list}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Techs;
