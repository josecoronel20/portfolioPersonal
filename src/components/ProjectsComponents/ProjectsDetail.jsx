import React from "react";
import { styleContainerTop } from "../../Utilities/customStyles";
import { useParams } from "react-router-dom";
import ProjectMockup from "../ProjectsComponents/ProjectMockup";
import useQuickTraduction from "../../Hooks/useQuickTraduction";
import ProjectsDetailPlanning from "./ProjectsDetailPlanning";
import useLanguage from "../../Hooks/useLanguage";

const ProjectsDetail = () => {
  const { id } = useParams();

  const { projectText } = useLanguage({ typeText: "projectText" });

  const projectFind = projectText.find(
    (project) => project.id === parseInt(id)
  );

  const textDescriptionTitle = useQuickTraduction({
    textEs: "DESCRIPCIÓN",
    textEn: "DESCRIPTION",
  });

  const textMainFeaturesTitle = useQuickTraduction({
    textEs: "FUNCIONES PRINCIPALES",
    textEn: "MAIN FEATURES",
  });

  //componetizacion de title y paragraph
  const Subtitle = ({ title, paragraph }) => {
    return (
      <div>
        <h4>{title}</h4>
        <p className="font-light">{paragraph}</p>
      </div>
    );
  };

  console.log(projectFind.details.mainFeatures);

  return (
    <main className={styleContainerTop}>
      <div>
        <h2>
          PROYECTO:
          <span className="text-green">{projectFind.title.toUpperCase()}</span>
        </h2>
        <p className="text-lightLight opacity-50 font-light">
          {projectFind.isFinished === true
            ? "proyecto finalizado"
            : "proyecto aún en proceso"}
        </p>
      </div>

      <div className="flex flex-col gap-20 sm:grid sm:grid-cols-2 md:grid-cols-3 items-center">
        <div className="order-1 sm:order-2 flex justify-center md:col-span-2 lg:col-span-1">
          <ProjectMockup
            imagePcUrl={projectFind.imagePcUrl}
            imageMobileUrl={projectFind.imageMobileUrl}
            siteUrl={projectFind.repoUrl}
            repoUrl={projectFind.repoUrl}
          />
        </div>

        <section className="flex flex-col order-2 sm:order-1 md:col-1 lg:col-span-2">
          <h2 className="text-green">{textDescriptionTitle}</h2>
          <p className="font-light">{projectFind.description}</p>
        </section>

        <div className="order-4 row-span-2 sm:row-span-4 md:row-span-1 md:col-span-3">
          <ProjectsDetailPlanning project={projectFind} />
        </div>

        <section className="order-5 flex flex-col gap-1 md:row-span-2">
          <h3 className="text-green">
            {textMainFeaturesTitle}
          </h3>

          <div className="flex flex-col gap-5">
            {projectFind.details.mainFeatures.map((feature) => {
              return <div key={feature.title}><Subtitle
                title={feature.title}
                paragraph={feature.description}
              /></div>;
            })}
          </div>
        </section>

        <section className="order-6 md:col-span-2">
          <h2 className="text-green">TECNOLOGIAS PRINCIPALES</h2>
          <div className="flex flex-wrap gap-3">
            {projectFind.techs.map((tech) => {
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

        <section className="order-7 flex flex-col gap-1 md:col-span-2">
          <h3 className="text-green">{projectFind.details.issues.title}</h3>
          <div className="flex flex-col gap-5">
            <div>
              <h4>{projectFind.details.issues.issue1.title}</h4>
              <p className="font-light">
                {projectFind.details.issues.issue1.description}
              </p>
            </div>
            <div>
              <h4>{projectFind.details.issues.issue2.title}</h4>
              <p className="font-light">
                {projectFind.details.issues.issue2.description}
              </p>
            </div>
            <div>
              <h4>{projectFind.details.issues.issue3.title}</h4>
              <p className="font-light">
                {projectFind.details.issues.issue3.description}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectsDetail;
