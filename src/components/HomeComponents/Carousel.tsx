import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import CardProject from "../ProjectsComponents/CardProject";
import { iconArrowLeft, iconArrowRight } from "../../utilities/Icons";

const Carousel = ():JSX.Element => {
  //hook que importa el texto segun idioma
  const { textLanguage } = useLanguage();

  //state que maneja que id de projecto seleccionar
  const [projectId, setProjectId] = useState<number>(1);

  //extrae el largo del array de la lista de projectos
  const lenghtArrayProjects = textLanguage.projects.list.length;

  //handler de boton prev
  const handlerLeftArrow = ():void => {
    setProjectId((prev) => (prev > 1 ? prev - 1 : lenghtArrayProjects));
  };

  //handler de boton prev
  const handlerRightArrow = ():void => {
    setProjectId((prev) => (prev < lenghtArrayProjects ? prev + 1 : 1));
  };

  //filtra el projecto segun id
  const project = textLanguage.projects.list.find(
    (project) => project.id === projectId
  );

  //guard clause
  if (!project) {
    return (
      <p className="text-center w-full text-red-700">
        No se encontró el proyecto
      </p>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center py-10 gap-4">
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

export default Carousel;
