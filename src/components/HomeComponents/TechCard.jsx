import React from "react";
import useQuickTraduction from "../../Hooks/useQuickTraduction";
import { iconClose } from "../../utilities/Icons";

const TechCard = ({ infoTech, handlerToggle }) => {
  const textLevel = useQuickTraduction({
    textEs: "Nivel",
    textEn: "Level",
  });

  const textMainTopics = useQuickTraduction({
    textEs: "Temas Principales",
    textEn: "Main Topics",
  });

  const textRelatedProjects = useQuickTraduction({
    textEs: "Projectos relacionados",
    textEn: "Related projects",
  });

  return (
    <div className="fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 max-w-96 min-h-96 bg-lightLight flex rounded overflow-hidden text-gray-800">
      <div style={{ backgroundColor: infoTech.color }} className="w-5/12 flex flex-col items-center justify-evenly">
        <h4 className="text-xl font-semibold text-center">{infoTech.title}</h4>
        <div className="scale-150">{infoTech.iconWhite}</div>
      </div>

      <div className="flex flex-col justify-between p-3 w-7/12">
        <div>
          <h4 className="text-darkDark font-normal">{textLevel}</h4>
          <p className="text-darkLight">{infoTech.level}</p>
        </div>

        <div>
          <h4 className="text-darkDark font-normal">{textMainTopics}</h4>
          {infoTech.mainTopics.map((topic) => (
            <p key={topic} className="text-darkLight">
              {topic}
            </p>
          ))}
        </div>

        <div>
          <h4 className="text-darkDark font-normal">{textRelatedProjects}</h4>
          {infoTech.mainProjects.map((project) => (
            <p key={project} className="text-darkLight">
              {project}
            </p>
          ))}
        </div>
      </div>
      <div onClick={handlerToggle} style={{ backgroundColor: infoTech.color }} className="cursor-pointer rounded-full hover:scale-105 m-1 h-fit">{iconClose}</div>

    </div>
  );
};

export default TechCard;
