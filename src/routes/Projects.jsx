import React from "react";
import { styleContainerTop } from "../Utilities/customStyles";
import useLanguage from "../Hooks/useLanguage";
import ProjectsSection from "../components/ProjectsComponents/ProjectsSection";

const Projects = () => {
  const { language } = useLanguage();

  return (
    <main className={styleContainerTop}>
      <div>
        <h1>{language.projects.title}</h1>
        <ProjectsSection />
      </div>
    </main>
  );
};

export default Projects;
