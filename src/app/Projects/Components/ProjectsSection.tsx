import React from "react";
import CardProject from "@/app/Components/CardProject";
import { useLanguageStore } from "@/app/lib/store/useLanguageStore";

//Componente ProjectsSection que renderiza la sección de proyectos.
const ProjectsSection = (): JSX.Element => {
  //seccion que muestra las cards

  //importa el idioma del store
  const { textLanguage } = useLanguageStore();
  return (
    <section className="flex flex-col gap-20 w-full py-10 md:grid md:grid-cols-2 xl:grid-cols-3">
      {textLanguage.projects.list.map((project) => (
        <div key={project.id} className="flex justify-center">
          <CardProject project={project} />
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
