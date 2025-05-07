import React from "react";
import { styleButtonCard } from "../../Utilities/customStyles";
import { Link } from "react-router-dom";
import { useLanguage} from "../../context/LanguageContext"

const ButtonsCardProject = ({ urlSite, urlRepo, id }:{urlSite:string, urlRepo:string, id:number}) => {
  //todo: agregar visitar sitio,ver detalles y visitar repo a text y tipado
const {textLanguage} = useLanguage()
  return (
      <div className="flex flex-col gap-2 h-full  justify-center">
        <Link target="_blank" className={styleButtonCard} to={urlSite}>
          {textLanguage.projects.buttonText.seeProject}
        </Link>
        <div className="flex gap-2">
          <Link className={styleButtonCard} to={`/projects/${id}`}>
            {textLanguage.projects.buttonText.seeDetails}
          </Link>
          <Link target="_blank" className={styleButtonCard} to={urlRepo}>
            {textLanguage.projects.buttonText.seeRepo}
          </Link>
        </div>
      </div>
  );
};

export default ButtonsCardProject;
