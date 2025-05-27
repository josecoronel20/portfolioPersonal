import React from "react";
import { styleButtonCard } from "../../../lib/utilities/customStyles";
import { useLanguageStore } from "../../../lib/store/useLanguageStore";
import Link from "next/link";
//Componente ButtonsCardProject que renderiza los botones de los proyectos.

const ButtonsCardProject = ({
  urlSite,
  urlRepo,
  id,
}: {
  urlSite: string;
  urlRepo: string;
  id: number;
}): JSX.Element => {
  //importa el idioma del store
  const { textLanguage } = useLanguageStore();
  return (
    <div className="flex flex-col gap-2 h-full  justify-center">
      <Link target="_blank" className={styleButtonCard} href={urlSite}>
        {textLanguage.projects.buttonText.seeProject}
      </Link>
      <div className="flex gap-2">
        <Link className={styleButtonCard} href={`/Projects/${id}`}>
          {textLanguage.projects.buttonText.seeDetails}
        </Link>
        <Link target="_blank" className={styleButtonCard} href={urlRepo}>
          {textLanguage.projects.buttonText.seeRepo}
        </Link>
      </div>
    </div>
  );
};

export default ButtonsCardProject;
