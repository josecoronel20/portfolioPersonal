import React, { useState } from "react";
import { useLanguage } from "../../Context/LanguageContext";
import CardProject from "../ProjectsComponents/CardProject";
import { iconArrowLeft, iconArrowRight } from "../../utilities/Icons";

const Carrousel = () => {
  const { textLanguage } = useLanguage();
  const [projectId, setProjectId] = useState(1);
  const lenghtArrayProjects = textLanguage.projects.list.length;

  const handlerLeftArrow = () => {
    setProjectId((prev) => (prev > 1 ? prev - 1 : lenghtArrayProjects));
  };

  const handlerRightArrow = () => {
    setProjectId((prev) => (prev < lenghtArrayProjects ? prev + 1 : 1));
  };

  const project = textLanguage.projects.list.find(
    (project) => project.id === projectId
  );

  return (
    <section className="flex flex-col justify-center items-center py-10">
      <h2>{textLanguage.home.lastProyects.title}</h2>
    <div className="min-w-64 w-full flex flex-row justify-center items-center gap-10">
      <div className="cursor-pointer" onClick={() => handlerLeftArrow()}>
        {iconArrowLeft}
      </div>
      <CardProject project={project} />
      <div className="cursor-pointer" onClick={() => handlerRightArrow()}>
        {iconArrowRight}
        </div>
        </div>
        </section>
  );
};

export default Carrousel;
