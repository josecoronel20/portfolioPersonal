import React from "react";
import { tech } from "../../utilities/types";
import { useLanguage } from "../../context/LanguageContext";


const TechCard = ({ techInfo }: { techInfo: tech }):JSX.Element => {
  //hook que extrae el texto del idioma seleccionado
  const {textLanguage} = useLanguage()

  return (
    <div className="fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 max-w-96 min-h-96 bg-lightLight flex rounded overflow-hidden text-gray-800">
      <div
        style={{ backgroundColor: techInfo.color }}
        className={`w-5/12 flex flex-col items-center justify-evenly`}
      >
        <h4 className="text-xl font-semibold text-center">{techInfo.title}</h4>
        <div className="scale-150">{techInfo.iconWhite}</div>
      </div>

      <div className="flex flex-col justify-between p-3 w-7/12">
        <div>
          <h4 className="text-darkDark font-normal">{textLanguage.home.techsAndSkills.levelText}</h4>
          <p className="text-darkLight">{techInfo.level}</p>
        </div>

        <div>
          <h4 className="text-darkDark font-normal">{textLanguage.home.techsAndSkills.topicText}</h4>
          {techInfo.mainTopics.map((topic,index) => (
            <p key={index} className="text-darkLight">
              {topic}
            </p>
          ))}
        </div>

        <div>
          <h4 className="text-darkDark font-normal">{textLanguage.home.techsAndSkills.projectsText}</h4>
          {techInfo.mainProjects.map((project) => (
            <p key={project} className="text-darkLight">
              {project}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCard;
