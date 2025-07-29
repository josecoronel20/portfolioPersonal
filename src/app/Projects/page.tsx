"use client";
import React from "react";
import { useLanguageStore } from "@/store/useLanguageStore";
import CardProject from "../homeComponents/mainProjectsSection/CardProject";
import { project } from "@/types/types";

//Componente ProjectsPage que renderiza la sección de proyectos.
const ProjectsPage = (): JSX.Element => {
  //importa el idioma del store
  const { textLanguage } = useLanguageStore();

  return (
    <div className="min-h-screen bg-color-to-b text-white pt-16">
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
            {textLanguage.projectsPage.title}
          </h1>
          <p className="text-lg md:text-xl text-cyan-100/90 leading-relaxed max-w-3xl mx-auto font-light">
            {textLanguage.projectsPage.subtitle}
          </p>
        </header>

        <main>
          <div className="grid lg:grid-cols-3 gap-8">
            {textLanguage.projectsPage.projects.map(
              (project: project, index: number) => (
                <CardProject key={index} project={project} index={index} />
              ),
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;
