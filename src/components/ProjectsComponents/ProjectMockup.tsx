import React from "react";
import { Link } from "react-router-dom";
import { styleButtonLight } from "../../utilities/customStyles";
import ImageModal from "../ReutilizableComponents/ImageModal";
import { project } from "../../utilities/types";
import { useLanguage } from "../../context/LanguageContext";

const ProjectMockup = ({
 project
}:{project:project}):JSX.Element => {
  //muestra el mockup del proyecto
  //hook que importa el texto segun idioma
  const {textLanguage} = useLanguage()

  return (
    <section className="w-fit ">
      <div className="flex flex-col gap-5 min-w-fit">
        <div className="flex  gap-5 justify-end max-w-lg">
          <div className="flex flex-col items-center justify-end  w-4/6">
            <div className="border-x-[6px] border-t-[8px] md:border-x-[10px] md:border-t-[14px] rounded-t-md w-10/12 border-lightLight">
              <ImageModal>
                <img src={project.imgDesktopUrl} alt={project.imgDesktopAlt} />
              </ImageModal>
            </div>
            <div className="w-full h-[12px] rounded-sm bg-lightLight" />
          </div>
          <div className="items-center w-2/6 relative">
            <div className="absolute p-[3px] bg-darkDark rounded-full left-1 top-[1px]" />

            <div className="border-x-4 border-y-8 md:border-x-[8px] md:border-y-[12px] rounded-lg h-full border-lightLight"
            >
            <ImageModal>
              <img
                src={project.imgMobileUrl}
                alt={project.imgMobileAlt}
              />
            </ImageModal></div>
          </div>
        </div>

        <div className="flex gap-1 w-full">
          <Link target="_blank" className={styleButtonLight} to={project.siteUrl}>
            {textLanguage.projects.buttonText.seeProject}
          </Link>

          <Link target="_blank" className={`${styleButtonLight} content-center`} to={project.repoUrl}>
          {textLanguage.projects.buttonText.seeRepo}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectMockup;
