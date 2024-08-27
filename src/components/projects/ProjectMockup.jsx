import React from "react";
import { Link } from "react-router-dom";
import { styleButtonLight } from "../../utilities/styles";
import useQuickTraduction from "../Hooks/useQuickTraduction";

const ProjectMockup = ({ imagePcUrl, imageMobileUrl, siteUrl, repoUrl }) => {
  const textVisite = useQuickTraduction({
    textEs: "VISITAR SITIO",
    textEn: "VISIT SITE",
  });
  const textRepo = useQuickTraduction({
    textEs: "VISITAR REPO",
    textEn: "VISIT REPO",
  });

  return (
    <section>
      <div className="flex flex-col gap-5">
        <div className="flex max-w-72 gap-5 justify-end">
          <div className="flex flex-col items-center justify-end  w-4/6">
          
            <img
              className="border-x-[6px] border-t-[8px] rounded-md w-10/12 border-lightLight"
              src={imagePcUrl}
              alt=""
            />
            <div className="w-full h-[10px] rounded-sm bg-lightLight" />
          </div>
          <div className="items-center w-2/6 relative">
          <div className="absolute p-[3px] bg-darkDark rounded-full left-1 top-[1px]" />
            <img
              className="border-x-4 border-y-8 rounded-lg h-full border-lightLight"
              src={imageMobileUrl}
              alt=""
            />
          </div>
        </div>

        <div className="flex gap-1">
          <div className={styleButtonLight}>
            <Link to={siteUrl}>{textVisite}</Link>
          </div>

          <div className={styleButtonLight}>
            <Link to={repoUrl}>{textRepo}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMockup;
