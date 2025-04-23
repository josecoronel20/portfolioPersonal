import React from "react";
import { styleButtonCard } from "../../Utilities/customStyles";
import { Link } from "react-router-dom";

const ButtonsCardProject = ({ urlSite, urlRepo, id }) => {
  //todo: agregar visitar sitio,ver detalles y visitar repo a text y tipado

  return (
      <div className="flex flex-col gap-2 h-full  justify-center">
        <Link target="_blank" className={styleButtonCard} to={urlSite}>
          sda
        </Link>
        <div className="flex gap-2">
          <Link className={styleButtonCard} to={`/projects/${id}`}>
            adsd
          </Link>
          <Link target="_blank" className={styleButtonCard} to={urlRepo}>
            adsasd
          </Link>
        </div>
      </div>
  );
};

export default ButtonsCardProject;
