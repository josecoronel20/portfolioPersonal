import React from "react";
import { styleContainerTop } from "../Utilities/customStyles";
import ProjectsSection from "../components/ProjectsComponents/ProjectsSection";
import { useLanguage } from "../Context/LanguageContext";

const Projects = () => {
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
