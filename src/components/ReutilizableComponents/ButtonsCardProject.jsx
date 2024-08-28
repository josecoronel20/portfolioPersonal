import React from "react";
import { styleButtonCard } from "../../../Utilities/customStyles";
import { Link } from "react-router-dom";
import useQuickTraduction from "../../Hooks/useQuickTraduction";

const ButtonsCardProject = ({urlSite, urlRepo, id}) => {
  const textVisite = useQuickTraduction({textEs:"VISITAR SITIO", textEn:"VISIT SITE"});
  const textDetail = useQuickTraduction({textEs:"DETALLE", textEn:"DETAIL"});
  const textRepo = useQuickTraduction({textEs:"VISITAR REPO", textEn:"VISIT REPO"});
  console.log(id)


    return (
       <div className="flex flex-col gap-2">
        <div className={styleButtonCard}>
          <Link to={urlSite}>{textVisite}</Link>
        </div>
        <div className="flex gap-2">
          <div className={styleButtonCard}>
            <Link to={`/projects/${id}`}>{textDetail}</Link>
          </div>
          <div className={styleButtonCard}>
            <Link to={urlRepo}>{textRepo}</Link>
          </div>
        </div>
      </div>
      )
}

export default ButtonsCardProject