"use client";
import { Briefcase } from "lucide-react";
import React from "react";
import CardProject from "./CardProject";
import FadeInSection from "@/components/reutilizable/FadeInSection";
import { useLanguageStore } from "@/store/useLanguageStore";
import { project } from "@/types/types";

const MainProjectsSection = (): JSX.Element => {
  const { textLanguage } = useLanguageStore();

  return (
    <section className="py-24 px-4 bg-color-to-b">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection direction="right">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300">
            <Briefcase className="w-10 h-10 inline mr-4" />
            {textLanguage.homePage.mainProjectsSection.title}
          </h2>
        </FadeInSection>

        <FadeInSection direction="left">
          <div className="grid lg:grid-cols-3 gap-8">
            {textLanguage.projectsPage.projects.slice().reverse().map((project: project, index: number) => (
              <CardProject key={project.id} project={project} index={index} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default MainProjectsSection;
