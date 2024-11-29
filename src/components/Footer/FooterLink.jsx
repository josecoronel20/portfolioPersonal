import React, { useState } from "react";
import { Link } from "react-router-dom";
import { iconCopy } from "../../utilities/Icons";
import useQuickTraduction from "../../Hooks/useQuickTraduction";

const FooterLink = ({ icon, textForCopy, url, text }) => {
  const [copyAlert, setCopyAlert] = useState(false);

  const textCopyAlert = useQuickTraduction({
    textEs: "¡Copiado!",
    textEn: "¡Copied!",
  });

  const handlerCopyAlert = () => {
    setCopyAlert(true);
    setTimeout(() => {
      setCopyAlert(false);
    }, 1000);
  };

  const copyClipBoard = () => {
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
        {copyAlert === true && <p className="text-sm font-light">{textCopyAlert}</p>}
      </div>
    </div>
  );
};

export default FooterLink;
