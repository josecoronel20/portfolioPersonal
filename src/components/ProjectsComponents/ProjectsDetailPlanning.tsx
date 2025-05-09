import React from "react";
import ImageModal from "../ReutilizableComponents/ImageModal";
import { project } from "../../utilities/types";
import { useLanguageStore } from "../../store/useLanguageStore";

const ProjectsDetailPlanning = ({
  project,
}: {
  project: project;
}): JSX.Element => {

  //importa el idioma del store
  const { textLanguage } = useLanguageStore();

  //componetizacion de subtitle
  const Subtitle = ({
    title,
    paragraph,
    urlImg,
  }: {
    title: string;
    paragraph: string;
    urlImg: string | null;
  }): JSX.Element => {
    return (
      <div className="flex flex-col gap-1 justify-between h-full">
        <div>
          <h4>{title}</h4>
          <p className="font-light">{paragraph}</p>
        </div>

        {urlImg !== null ? (
          <ImageModal>
            <img
              className="rounded custom-shadow hover:scale-105 transition-transform ease-in-out duration-150"
              src={urlImg}
              alt=""
            />
          </ImageModal>
        ) : null}
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h3 className="text-green">
          {textLanguage.projects.projectDetailTexts.plainingProcessTitle}
        </h3>
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
