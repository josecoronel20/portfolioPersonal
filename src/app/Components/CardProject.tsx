import React from "react";
import ButtonsCardProject from "../Projects/[id]/Components/ButtonsCardProject";
import { project } from "../lib/utilities/types";
import Image from "next/image";

const CardProject = ({ project }: { project: project }):JSX.Element => {
//card para mostrar proyectos
  return (
    <div
      key={project.id}
      className="rounded-md overflow-hidden bg-lightLight w-full max-w-64 h-[470px] custom-shadow"
    >
      <div className="h-1/3">
        <Image className="object-cover h-full"
          src={project.imgDesktopUrl}
          alt={`img de portada de ${project.imgDesktopAlt}`}
          width={300}
          height={150}
        />
      </div>
      <div className="p-5 gap-2 flex flex-col h-2/3 justify-between">
        <section className="h-full">
          <h3 className="text-lg font-extrabold text-darkDark">{`PROYECTO: ${project.title.toUpperCase()}`}</h3>
        </section>

        <section className="flex gap-1 items-center h-full overflow-hidden">
          <div className="flex gap-1 flex-wrap">
            {project.techs.map((tech) => (
              <p
                key={tech}
                className="bg-gray-400 font-light text-xs rounded text-gray-700 px-2"
              >
                {tech}
              </p>
            ))}
          </div>
        </section>

        <section className="max-h-20 overflow-hidden">
          <p className="text-gray-700">{project.description}</p>
        </section>

        <ButtonsCardProject
          urlSite={project.siteUrl}
          urlRepo={project.repoUrl}
          id={project.id}
        />
      </div>
    </div>
  );
};
export default CardProject;
