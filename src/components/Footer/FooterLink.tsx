import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { iconCopy } from "../../utilities/Icons";
import { useLanguage } from "../../context/LanguageContext";

const FooterLink = ({ icon, textForCopy, url, text }:{icon:ReactNode,textForCopy:string,url:string,text:string}):JSX.Element => {
  //hook que importa el texto segun idioma
  const {textLanguage} = useLanguage()

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
  const copyClipBoard = ():void => {
    navigator.clipboard.writeText(textForCopy);
    handlerCopyAlert();
  };

  return (
    <div className="flex gap-1">
      {icon}

        <Link className=" text-lightLight font-light opacity-50 hover:opacity-100" to={url} target="_blank">
          {text}
        </Link>
      <div
        onClick={copyClipBoard}
        className="hover:scale-105 cursor-pointer opacity-50 hover:opacity-100 flex gap-1"
      >
        {iconCopy}
        {copyAlert === true && <p className="text-sm font-light">{textLanguage.footer.copyText}</p>}
      </div>
    </div>
  );
};

export default FooterLink;
