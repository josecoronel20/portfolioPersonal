import React from "react";
import { styleButtonCard } from "../../../utilities/styles";
import { Link } from "react-router-dom";
import useQuickTraduction from "../../customHooks/useQuickTraduction";

const ButtonsCardProject = (urlSite, urlRepo, urlDetail) => {
  const textVisite = useQuickTraduction({textEs:"VISITAR SITIO", textEn:"VISIT SITE"});
  const textDetail = useQuickTraduction({textEs:"DETALLE", textEn:"DETAIL"});
  const textRepo = useQuickTraduction({textEs:"VISITAR REPO", textEn:"VISIT REPO"});

    return (
       <div className="flex flex-col gap-2">
        <div className={styleButtonCard}>
          <Link to={urlSite}>{textVisite}</Link>
        </div>
        <div className="flex gap-2">
          <div className={styleButtonCard}>
            <Link to={urlDetail}>{textDetail}</Link>
          </div>
          <div className={styleButtonCard}>
            <Link to={urlRepo}>{textRepo}</Link>
          </div>
        </div>
      </div>
      )
}

export default ButtonsCardProject