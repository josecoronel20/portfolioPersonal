import React from "react";
import { styleButtonCard } from "../../Utilities/customStyles";
import { Link } from "react-router-dom";
import useQuickTraduction from "../../Hooks/useQuickTraduction";

const ButtonsCardProject = ({ urlSite, urlRepo, id }) => {
  const textVisite = useQuickTraduction({
    textEs: "VISITAR SITIO",
    textEn: "VISIT SITE",
  });
  const textDetail = useQuickTraduction({
    textEs: "DETALLE",
    textEn: "DETAIL",
  });
  const textRepo = useQuickTraduction({
    textEs: "VISITAR REPO",
    textEn: "VISIT REPO",
  });

  return (
    <div className="flex flex-col gap-2">
      <Link className={styleButtonCard} to={urlSite}>
        {textVisite}
      </Link>
      <div className="flex gap-2">
        <Link className={styleButtonCard} to={`/projects/${id}`}>
          {textDetail}
        </Link>
        <Link className={styleButtonCard} to={urlRepo}>
          {textRepo}
        </Link>
      </div>
    </div>
  );
};

export default ButtonsCardProject;