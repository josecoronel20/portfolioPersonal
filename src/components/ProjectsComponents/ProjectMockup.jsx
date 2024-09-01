import React from "react";
import { Link } from "react-router-dom";
import { styleButtonLight } from "../../utilities/customStyles";
import useQuickTraduction from "../../Hooks/useQuickTraduction";

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
    <section className="w-fit ">
      <div className="flex flex-col gap-5 min-w-fit">
        <div className="flex  gap-5 justify-end max-w-lg">
          <div className="flex flex-col items-center justify-end  w-4/6">
            <img
              className="border-x-[6px] border-t-[8px] md:border-x-[10px] md:border-t-[14px] rounded-t-md w-10/12 border-lightLight"
              src={imagePcUrl}
              alt=""
            />
            <div className="w-full h-[12px] rounded-sm bg-lightLight" />
          </div>
          <div className="items-center w-2/6 relative">
            <div className="absolute p-[3px] bg-darkDark rounded-full left-1 top-[1px]" />
            <img
              className="border-x-4 border-y-8 md:border-x-[8px] md:border-y-[12px] rounded-lg h-full border-lightLight"
              src={imageMobileUrl}
              alt=""
            />
          </div>
        </div>

        <div className="flex gap-1 w-full">
          <Link className={styleButtonLight} to={siteUrl}>
            {textVisite}
          </Link>

          <Link className={styleButtonLight} to={repoUrl}>
            {textRepo}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectMockup;
