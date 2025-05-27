"use client";

import React, { useState } from "react";
import { tech } from "@/app/lib/utilities/types";
import { useToggle } from "@/app/lib/hooks/useToggle";
import Modal from "@/app/Components/Modal";
import TechCard from "@/app/Components/TechCard";

//Componente TechHover que renderiza un icono de tecnología.
const TechHover = ({ techProp }: { techProp: tech }): JSX.Element => {
  //state que maneja si el icon esta hover
  const [isHover, setIsHover] = useState(false);

  //hook de toggle
  const { isToggleOpen, setIsToggleOpen } = useToggle();

  return (
    <div
      className="cursor-pointer flex flex-col justify-center items-center "
      key={techProp.id}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setIsToggleOpen(!isToggleOpen)}
    >
      <div>{isHover ? techProp.iconColor : techProp.iconWhite}</div>
      <h3 className={`${techProp.iconWhite && !isHover && "opacity-0"}`}>
        {techProp.title}
      </h3>
      <Modal toggle={isToggleOpen} nav={false}>
        <TechCard techInfo={techProp} />
      </Modal>
    </div>
  );
};

export default TechHover;
