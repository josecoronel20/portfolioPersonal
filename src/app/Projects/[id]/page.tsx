"use client";

import { styleContainerTop } from "@/app/lib/utilities/customStyles";
import React from "react";
import ProjectMockup from "./Components/ProjectMockup";
import ProjectsDetailPlanning from "./Components/ProjectsDetailPlanning";
import { useLanguageStore } from "@/app/lib/store/useLanguageStore";

const ProjectsDetail = ({params}:{params: {id: string}}) => {
  //muestra la informacion en detalle de los proyectos

  //extrae id del url
  const { id } = params;

  //importa el idioma del store
  const { textLanguage } = useLanguageStore();

  //si hay id lo parsea
  const parsedId = id ? parseInt(id) : null;

  //filtra proyecto segun id
  const projectFinded = textLanguage.projects.list.find(
    (project) => project.id === parsedId
  ); 

  //componetizacion de title y paragraph
  const Subtitle = ({
    title,
    paragraph,
  }: {
    title: string;
    paragraph: string;
  }):JSX.Element => {
    return (
      <div>
        <h4>{title}</h4>
        <p className="font-light">{paragraph}</p>
      </div>
    );
  };

  //guard clause
  if(!projectFinded){
    return <p className="w-full text-center text-red-700">no se encontró ningun proyecto</p>
  }

  return (
    <main className={styleContainerTop}>
      <div>
        <h2>
          {textLanguage.projects.title}:
          <span className="text-green">{projectFinded?.title.toUpperCase()}
          </span>
        </h2>
        <p className="text-lightLight opacity-50 font-light">
          {projectFinded?.isFinished === true
            ? textLanguage.projects.projectDetailTexts.isFinishText
            : textLanguage.projects.projectDetailTexts.isNotFinishText}
        </p>
      </div>

      <div className="flex flex-col gap-20 sm:grid sm:grid-cols-2 md:grid-cols-3 items-center">
        <div className="order-1 sm:order-2 flex justify-center md:col-span-2 lg:col-span-1">
          <ProjectMockup project={projectFinded} />
        </div>

        <section className="flex flex-col order-2 sm:order-1 md:col-1 lg:col-span-2">
          <h2 className="text-green">
            {textLanguage.projects.projectDetailTexts.descriptionTitle}
          </h2>
          <p className="font-light">{projectFinded?.description}</p>
        </section>

        <div className="order-3 row-span-2  md:row-span-1 md:col-span-3">
          <ProjectsDetailPlanning project={projectFinded} />
        </div>

        <section className="order-4  md:col-span-3 lg:col-span-2">
          <h2 className="text-green">{textLanguage.projects.projectDetailTexts.techsUsed}</h2>
          <div className="flex flex-wrap gap-3">
            {projectFinded?.techs.map((tech) => {
              return (
                <div
                  key={tech}
                  className="bg-[#BCC0B9] font-light rounded text-darkLight px-3 inline-block"
                >
                  {tech}
                </div>
              );
            })}
          </div>
        </section>

        <section className="order-5 flex flex-col gap-1 md:col-span-3 ">
          <h3 className="text-green">{textLanguage.projects.title}</h3>

          <div className="flex flex-col gap-5 ">
            {projectFinded?.details.mainFeatures.map((feature) => {
              return (
                <div key={feature.title}>
                  <Subtitle
                    title={feature.title}
                    paragraph={feature.description}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section className="order-6 flex flex-col gap-1 sm:col-span-2 md:col-span-3 ">
          <h3 className="text-green">{projectFinded?.details.issues.title}</h3>
          <div className="flex flex-col gap-5">
            {projectFinded?.details.issues.issueList.map((issue, index) => {
              return (
                <div key={index}>
                  <h4>{issue.title}</h4>
                  <p className="font-light">{issue.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectsDetail;
