import React from "react";
import esProjects from "../../utilities/projectText/enProjects.json";
import enProjects from "../../utilities/projectText/enProjects.json";
import { useSelector } from "react-redux";

const CardProject = () => {
  const language = useSelector((state) => state);
  let projects = language === "es" ? esProjects : enProjects;

  return (
    <div className="flex flex-col gap-52 max-w-80">
      {projects.map((project) => (
        <CardProject
          key={project.id}
          id={project.id}
          title={project.title}
          imageUrl={project.imageUrl}
          isFinish={project.isFinish}
          techs={project.techs}
          description={project.description}
          siteUrl={project.siteUrl}
          detailUrl={project.detailUrl}
          repoUrl={project.repoUrl}
        />
      ))}
    </div>
  );
};

export default CardProject;
