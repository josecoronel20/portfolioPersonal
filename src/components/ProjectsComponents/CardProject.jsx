import React from "react";
import TechToggle from "../ReutilizableComponents/TechToggle";
import ButtonsCardProject from "./ButtonsCardProject";
import DescriptionToggle from "../ReutilizableComponents/DescriptionToggle";

const CardProject = ({ project }) => {
  //todo:agregar finalizado y en proceso al tipado y al text

  return (
    <div
      key={project.id}
      className="rounded-md overflow-hidden bg-lightLight w-fit max-w-72 custom-shadow"
    >
      <div>
        <img
          src={project.imagePcUrl}
          alt={`img de portada de ${project.imageDesktopAlt}`}
        />
      </div>
      <div className="p-4 gap-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-darkDark">{`PROYECTO: ${project.title.toUpperCase()}`}</h3>

          <p className="text-darkLight">en proceso </p>
        </div>

        <TechToggle>
          {project.techs.map((tech) => (
            <div
              key={tech}
              className="bg-[#BCC0B9] font-light rounded text-darkLight px-3 inline-block"
            >
              {tech}
            </div>
          ))}
        </TechToggle>

        <DescriptionToggle description={project.description} />

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
