import React, { useState } from "react";
import Modal from "../reutilizable/ImageModal";
import { useToggle } from "../../Hooks/useToggle";
import TechCard from "../../routes/home/Components/TechCard";

const TechMap = ({ category }) => {
  return (
    <div className="grid grid-cols-2 justify-center items-center ">
      {/* creacion de estado individual para cada elemento al crear el estado dentro de el mapeo */}
      {category.map((item) => {
        //toggle para abrir o cerrar el modal
        const { isToggleOpen, handlerToggle, setIsToggleOpen } = useToggle();

        //estados para manejar el hover
        const [styleHoverShow, setstyleHoverShow] = useState("block");
        const [styleHoverHidden, setstyleHoverHidden] = useState("hidden");

        const handlerIconEnter = () => {
          setstyleHoverHidden("block");
          setstyleHoverShow("hidden");
        };
        const handlerIconLeave = () => {
          setstyleHoverHidden("hidden");
          setstyleHoverShow("block");
        };

        //contenido de item con iconos
        const itemContent1 = (
          <>
            <div className={`${styleHoverShow}`}>{item.iconWhite}</div>
            <div className={`${styleHoverHidden}`}>{item.iconColor}</div>

            <h4
              className={` ${
                styleHoverHidden === "hidden" ? "opacity-0" : ""
              } `}
            >
              {item.title}
            </h4>
          </>
        );

        //contenido de item sin iconos
        const itemContent2 = <h4>{`-${item.title}`}</h4>;

        return (
          <div key={item.title}>
            <Modal toggle={isToggleOpen} setToggle={setIsToggleOpen}>
              {/*si toggle esta abierto se renderiza la card*/}

              {isToggleOpen === true && (
                <TechCard infoTech={item} handlerToggle={handlerToggle} />
              )}
              <div
                onClick={handlerToggle}
                onMouseEnter={handlerIconEnter}
                onMouseLeave={handlerIconLeave}
                className={`flex flex-col justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out p-5 ${item.iconColor ? "items-center" : "items-start" }`}
              >
                {item.iconColor ? itemContent1 : itemContent2}
              </div>
            </Modal>
          </div>
        );
      })}
    </div>
  );
};

export default TechMap;
