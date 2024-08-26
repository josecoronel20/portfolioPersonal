import React from "react";
import { useToggle } from "../../Hooks/useToggle";
import SeeMore from "../SeeMore";

const TechToggle = ({ children }) => {
  const { isToggleOpen: isTechOpen, handlerToggle: handlerTechOpen } =
    useToggle();

  return (
    <div className={`flex gap-1 ${isTechOpen === true && "flex-col"}`}>
      <div
        className={`flex ${
          isTechOpen === false ? "text-nowrap overflow-hidden" : "flex-wrap"
        } gap-2 `}
      >
        {children}
      </div>
      <SeeMore state={isTechOpen} handler={handlerTechOpen}/>
    </div>
  );
};

export default TechToggle;
