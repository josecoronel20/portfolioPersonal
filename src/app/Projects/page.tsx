"use client";

import React from "react";
import { useLanguageStore } from "@/app/lib/store/useLanguageStore";
import ProjectsSection from "./Components/ProjectsSection";

//Componente ProjectsPage que renderiza la sección de proyectos.
const ProjectsPage = (): JSX.Element => {
  //importa el idioma del store
  const { textLanguage } = useLanguageStore();

  return (
    <main className="min-h-screen bg-darkDark">
      <h1>{textLanguage.projects.title}</h1>
      <ProjectsSection />
    </main>
  );
};

export default ProjectsPage;
