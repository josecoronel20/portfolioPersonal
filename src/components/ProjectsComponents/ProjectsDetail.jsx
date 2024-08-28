import React from "react";
import {
  styleCustomContainerTop,
} from "../../utilities/customStyles";
import { useSelector } from "react-redux";
import esProjects from "../../utilities/texts/TextProjectPage/esProjects.json";
import enProjects from "../../utilities/texts/TextProjectPage/enProjects.json";
import { useParams } from "react-router-dom";
import ProjectMockup from "../ProjectsComponents/ProjectMockup";
import useQuickTraduction from "../../Hooks/useQuickTraduction";
import ProjectsDetailPlanning from "./ProjectsDetailPlanning";

const ProjectsDetail = () => {
  const { id } = useParams();
  const languageContext = useSelector((state) => state);
  const projects = languageContext === "es" ? esProjects : enProjects;
  const projectFind = projects.find((project) => project.id === parseInt(id));

  const textDescriptionTitle = useQuickTraduction({
    textEs: "DESCRIPCIÓN",
    textEn: "DESCRIPTION",
  });

  return (
    <main className={styleCustomContainerTop}>
      <div className="flex flex-col gap-20">
        <div>
          <h2>
            PROYECTO:
            <span className="text-green">
              {projectFind.title.toUpperCase()}
            </span>
          </h2>
          <p className="text-lightLight opacity-50 font-light">
            {projectFind.isFinished === true
              ? "proyecto finalizado"
              : "proyecto aún en proceso"}
          </p>
        </div>

        <ProjectMockup
          imagePcUrl={projectFind.imagePcUrl}
          imageMobileUrl={projectFind.imageMobileUrl}
          siteUrl={projectFind.repoUrl}
          repoUrl={projectFind.repoUrl}
        />

        <section className="flex flex-col">
          <h2 className="text-green">{textDescriptionTitle}</h2>
          <p className="font-light">{projectFind.description}</p>
        </section>

        <ProjectsDetailPlanning project={projectFind} />

        <section className="flex flex-col gap-1">
          <h3 className="text-green">
            {projectFind.details.mainFeatures.title}
          </h3>
          <div className="flex flex-col gap-5">
            <div>
              <h4>{projectFind.details.mainFeatures.feature1.title}</h4>
              <p className="font-light">
                {projectFind.details.mainFeatures.feature1.description}
              </p>
            </div>
            <div>
              <h4>{projectFind.details.mainFeatures.feature2.title}</h4>
              <p className="font-light">
                {projectFind.details.mainFeatures.feature2.description}
              </p>
            </div>
            <div>
              <h4>{projectFind.details.mainFeatures.feature3.title}</h4>
              <p className="font-light">
                {projectFind.details.mainFeatures.feature3.description}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>TECNOLOGIAS PRINCIPALES</h2>
          <div className="flex flex-wrap gap-3">
          {projectFind.techs.map((tech) => {
           return <div
              key={tech}
              className="bg-[#BCC0B9] font-light rounded text-darkLight px-3 inline-block"
            >
              {tech}
            </div>;
          })}</div>
        </section>

        <section className="flex flex-col gap-1">
          <h3 className="text-green">
            {projectFind.details.issues.title}
          </h3>
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
