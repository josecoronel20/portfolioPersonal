import React from "react";
import Link from "next/link";
import { styleButtonLight } from "@/app/lib/utilities/customStyles";
import ImageModal from "@/app/Components/ImageModal";
import { project } from "@/app/lib/utilities/types";
import { useLanguageStore } from "@/app/lib/store/useLanguageStore";
import Image from "next/image";
const ProjectMockup = ({
 project
}:{project:project}):JSX.Element => {
  //muestra el mockup del proyecto

  //importa el idioma del store
  const {textLanguage} = useLanguageStore()

  return (
    <section className="w-fit ">
      <div className="flex flex-col gap-5 min-w-fit">
        <div className="flex  gap-5 justify-end max-w-lg">
          <div className="flex flex-col items-center justify-end  w-4/6">
            <div className="border-x-[6px] border-t-[8px] md:border-x-[10px] md:border-t-[14px] rounded-t-md w-10/12 border-lightLight">
              <ImageModal>
                <Image
                src={project.imgDesktopUrl}
                alt={project.imgDesktopAlt}
                width={400}
                height={200}
                className="w-full h-full object-cover"
                />
              </ImageModal>
            </div>
            <div className="w-full h-[12px] rounded-sm bg-lightLight" />
          </div>
          <div className="items-center w-2/6 relative">
            <div className="absolute p-[3px] bg-darkDark rounded-full left-1 top-[1px]" />

            <div className="border-x-4 border-y-8 md:border-x-[8px] md:border-y-[12px] rounded-lg h-full border-lightLight"
            >
            <ImageModal>
              <Image
                src={project.imgMobileUrl}
                alt={project.imgMobileAlt}
                width={150}
                height={200}
              />
            </ImageModal></div>
          </div>
        </div>

        <div className="flex gap-1 w-full">
          <Link target="_blank" className={styleButtonLight} href={project.siteUrl}>
            {textLanguage.projects.buttonText.seeProject}
          </Link>

          <Link target="_blank" className={`${styleButtonLight} content-center`} href={project.repoUrl}>
          {textLanguage.projects.buttonText.seeRepo}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectMockup;
