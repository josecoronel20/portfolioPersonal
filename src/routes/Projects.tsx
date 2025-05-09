import React from "react";
import { styleContainerTop } from "../utilities/customStyles";
import ProjectsSection from "../components/ProjectsComponents/ProjectsSection";
import { useLanguageStore } from "../store/useLanguageStore";

const Projects = ():JSX.Element => {
//importa el idioma del store
const {textLanguage} = useLanguageStore()

  return (
    <main className={styleContainerTop}>
      <div>
        <h1>{textLanguage.projects.title}</h1>
        <ProjectsSection />
      </div>
    </main>
  );
};

export default Projects;
