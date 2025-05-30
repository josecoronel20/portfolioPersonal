"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { iconCopy } from "@/app/lib/utilities/Icons";
import { useLanguageStore } from "@/app/lib/store/useLanguageStore";

//Componente FooterLink que renderiza un enlace en el pie de página.
const FooterLink = ({ icon, textForCopy, url, text }:{icon:ReactNode,textForCopy:string,url:string,text:string}):JSX.Element => {
  //importa el idioma del store
  const {textLanguage} = useLanguageStore();

  //state para mostrar o no alerta de "copiado"
  const [copyAlert, setCopyAlert] = useState<boolean>(false);

  //muestra alerta por un breve tiempo
  const handlerCopyAlert = ():void => {
    setCopyAlert(true);
    setTimeout(() => {
      setCopyAlert(false);
    }, 1000);
  };

  //copia el texto en el clipboard
  const copyClipBoard = async (): Promise<void> => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(textForCopy);
        handlerCopyAlert();
      } catch {
        // Silenciosamente ignoramos el error
      }
    }
  };

  return (
    <div className="flex gap-1">
      {icon}

      <Link className="text-lightLight font-light opacity-50 hover:opacity-100" href={url} target="_blank">
        {text}
      </Link>
      <div
        onClick={() => copyClipBoard()}
        className="hover:scale-105 cursor-pointer opacity-50 hover:opacity-100 flex gap-1"
      >
        {iconCopy}
        {copyAlert === true && <p className="text-sm font-light">{textLanguage.footer.copyText}</p>}
      </div>
    </div>
  );
};

export default FooterLink;
