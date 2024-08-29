import React from "react";
import CardProject from "../ReutilizableComponents/CardProject";
import useLanguage from "../../Hooks/useLanguage";

const ProjectsSection = () => {
  const {projectText} = useLanguage({typeText: "projectText"})

  return (
    <section className="flex flex-col gap-10 py-10">
      {projectText.map((project) => (
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
