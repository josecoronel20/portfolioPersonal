import React, { useState } from "react";
import { tech } from "../../types";
import { useToggle } from "../../Hooks/useToggle";
import Modal from "../ReutilizableComponents/Modal";
import TechCard from "./TechCard";

const TechMap = ({ techProp }: { techProp: tech }) => {
  const [isHover, setIsHover] = useState(false);
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
      <Modal toggle={isToggleOpen}>
        <TechCard techInfo={techProp}/>
      </Modal>
    </div>
  );
};

export default TechMap;
