import React from "react";
import CardProject from "../ReutilizableComponents/CardProject";
import useLanguage from "../../Hooks/useLanguage";

const ProjectsSection = () => {
  const {projectText} = useLanguage({typeText: "projectText"})

  return (
    <section className="flex flex-col gap-20 w-full py-10 md:grid md:grid-cols-2 xl:grid-cols-3">
      {projectText.map((project) => (
        <div key={project.id} className="flex justify-center">
          <CardProject
            project={project}
          />
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
