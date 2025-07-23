import React from "react";
import { styleContainerTop } from "../../Utilities/styles/customStyles";
import useLanguage from "../../Hooks/useText";
import ProjectsSection from "./Components/MyProjects";

const Projects = () => {
  const { globalText } = useLanguage({typeText: "globalText"});

  return (
    <main className={styleContainerTop}>
      <div>
        <h1>{globalText.projects.title}</h1>
        <ProjectsSection />
      </div>
    </main>
  );
};

export default Projects;
