import React from "react";
import { styleContainerTop } from "../utilities/customStyles";
import ProjectsSection from "../components/ProjectsComponents/ProjectsSection";
import { useLanguage } from "../context/LanguageContext";

const Projects = ():JSX.Element => {
//hook que importa el texto segun idioma
const {textLanguage} = useLanguage()

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
