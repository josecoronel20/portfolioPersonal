import React from "react";
import { useSelector } from "react-redux";
import esProjects from "../../utilities/texts/projectText/esProjects.json";
import enProjects from "../../utilities/texts/projectText/enProjects.json";
import CardProject from "../globalComponents/cardProject/CardProject";

const ProjectsSection = () => {
  const languageContext = useSelector((state) => state);
  let projects = languageContext === "es" ? esProjects : enProjects;

  return (
    <section className="flex flex-col gap-10 py-10">
      {projects.map((project) => (
        <div key={project.id} className="flex justify-center">
          <CardProject
            key={project.id}
            id={project.id}
            title={project.title}
            imageUrl={project.imageUrl}
            isFinish={project.isFinish}
            techs={project.techs}
            description={project.description}
            siteUrl={project.siteUrl}
            repoUrl={project.repoUrl}
          />
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
