import React from "react";
import ImageModal from "../ReutilizableComponents/ImageModal";
import { useLanguage } from "../../Context/LanguageContext";
import { project } from "../../types";

const ProjectsDetailPlanning = ({ project }:{project:project}) => {
  //todo:agregar texto de proceso de planificacion y "Mi objetivo fue 1desarrollar un sitio web que refleje mi identidad como diseñador y desarrollador, destacando mis habilidades y trabajos", agregar alt de imagen
  const {textLanguage} = useLanguage()

  //componetizacion de subtitle
  const Subtitle = ({ title, paragraph, urlImg }) => {
    return (
      <div className="flex flex-col gap-1 justify-between h-full">
        <div>
          <h4>{title}</h4>
          <p className="font-light">{paragraph}</p>
        </div>

        <ImageModal>
          <img
            className="rounded custom-shadow hover:scale-105 transition-transform ease-in-out duration-150"
            src={urlImg}
            alt=""
          />
        </ImageModal>
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h3 className="text-green">{textLanguage.projects.projectDetailTexts.plainingProcessTitle}</h3>
        <p className="font-light">{project.projectObjective}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        {project.details.planningProcess.map((process) => {
          return (
            <div key={process.title}>
              <Subtitle
                title={process.title}
                paragraph={process.description}
                urlImg={process.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsDetailPlanning;
