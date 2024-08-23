import React from "react";
import DescriptionToggle from "./DescriptionToggle";
import TechToggle from "./TechToggle";
import ButtonsCardProject from "./ButtonsCardProject";
import useQuickTraduction from "../../customHooks/useQuickTraduction";

const CardProject = (
 { id,
  title,
  imageUrl,
  isFinish,
  techs,
  description,
  siteUrl,
  detailUrl,
  repoUrl}
) => {
  const textFinish = useQuickTraduction({
    textEs: "Finalizado",
    textEn: "Finish",
  });
  const textInProces = useQuickTraduction({
    textEs: "En proceso",
    textEn: "In Proces",
  });

  return (
    <div key={id} className="rounded-md overflow-hidden bg-lightLight min-h-72">
      <div>
        <img src={imageUrl} alt={`img de portada de ${title}`} />
      </div>
      <div className="p-4 gap-4 flex flex-col">
        <div>
          <h3 className="text-lg font-bold text-darkDark">{`PROYECTO: ${title.toUpperCase()}`}</h3>

          <p className="text-darkLight">
            {isFinish === true ? textFinish : textInProces}
          </p>
        </div>

        <TechToggle>
          {techs.map((tech) => (
            <div
              key={tech}
              className="bg-[#BCC0B9] font-light rounded text-darkLight px-3 inline-block"
            >
              {tech}
            </div>
          ))}
        </TechToggle>

        <DescriptionToggle description={description} />

        <ButtonsCardProject
          urlSite={siteUrl}
          urlRepo={repoUrl}
          urlDetail={detailUrl}
        />
      </div>
    </div>
  );
};
export default CardProject;
