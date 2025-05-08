import React, { useState } from "react";
import { tech } from "../../utilities/types";
import { useToggle } from "../../hooks/useToggle";
import Modal from "../ReutilizableComponents/Modal";
import TechCard from "./TechCard";

const TechHover = ({ techProp }: { techProp: tech }):JSX.Element => {

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
        <TechCard techInfo={techProp}/>
      </Modal>
    </div>
  );
};

export default TechHover;
