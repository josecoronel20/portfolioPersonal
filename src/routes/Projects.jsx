import React from "react";
import { styleCustomContainerTop } from "../utilities/styles";
import useLanguage from "../components/Hooks/useLanguage";
import ProjectsSection from "../components/projects/ProjectsSection";

const Projects = () => {
  const { language } = useLanguage();

  return (
    <main className={styleCustomContainerTop}>
      <div>
        <h1>{language.projects.title}</h1>
        <ProjectsSection />
      </div>
    </main>
  );
};

export default Projects;
