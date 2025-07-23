import React from "react";
import ImageModal from "../../../../components/reutilizable/ImageModal";
import useQuickTraduction from "../../../../Hooks/useQuickTraduction";

const ProjectsDetailPlanning = ({ project }) => {
  const projectInfo = project.details.planningProcess;

  const textPlanningProcess = useQuickTraduction({
    textEs: "PROCESO DE PLANIFICACIÓN",
    textEn: "PLANNING PROCESS",
  });

  const textMainFeaturesDescription = useQuickTraduction({
    textEs: "Mi objetivo fue 1desarrollar un sitio web que refleje mi identidad como diseñador y desarrollador, destacando mis habilidades y trabajos.",
    textEn: "Mi objetivo fue 1desarrollar un sitio web que refleje mi identidad como diseñador y desarrollador, destacando mis habilidades y trabajos.",
  });

  //componetizacion de subtitle
  const Subtitle = ({ title, paragraph, urlImg }) => {
    return (
      <div className="flex flex-col gap-1 justify-between h-full">
        <div>
          <h4>{title}</h4>
          <p className="font-light">{paragraph}</p>
        </div>

        <ImageModal>
          <img className="rounded custom-shadow hover:scale-105 transition-transform ease-in-out duration-150" src={urlImg} alt="" />
        </ImageModal>
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h3 className="text-green">{textPlanningProcess}</h3>
        <p className="font-light">{textMainFeaturesDescription}</p>
      </div>

<div className="flex flex-col md:flex-row gap-5">
      {projectInfo.map((process) => {
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
