"use client";

import React from "react";
import { useLanguageStore } from "@/app/lib/store/useLanguageStore";
import ProjectsSection from "./Components/ProjectsSection";

const ProjectsPage = (): JSX.Element => {
  const { textLanguage } = useLanguageStore();

  return (
    <main className="min-h-screen bg-darkDark">
      <h1>{textLanguage.projects.title}</h1>
      <ProjectsSection />
    </main>
  );
};

export default ProjectsPage;
