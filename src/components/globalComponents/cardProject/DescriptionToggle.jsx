import React from "react";
import { useToggle } from "../../Hooks/useToggle";
import SeeMore from "../SeeMore";


const DescriptionToggle = ({description}) => {

    const {
        isToggleOpen: isDescriptionOpen,
        handlerToggle: handlerDescriptionOpen,
      } = useToggle();

    return (
        <div>
        <p className={`text-darkDark leading-snug  ${isDescriptionOpen === false && "max-h-16 overflow-hidden"}`}
        >
          {description}
        </p>
        <SeeMore state={isDescriptionOpen} handler={handlerDescriptionOpen}/>
      </div>
    )
}

export default DescriptionToggle