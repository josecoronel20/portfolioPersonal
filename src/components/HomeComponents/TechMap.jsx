import React from "react";
import Modal from "../../components/ReutilizableComponents/Modal";
import {useToggle} from "../../Hooks/useToggle";
import TechCard from "./TechCard";

const TechMap = ({ category }) => {
  return (
    <div className="flex flex-wrap justify-around items-start">
      {/* creacion de estado individual para cada elemento al crear el estado dentro de el mapeo */}
      {category.map((item) => {
        const [iconHover, setIconHover] = React.useState("iconWhite");

        const { isToggleOpen, handlerToggle, setIsToggleOpen } = useToggle();

        const handlerIconEnter = () => {
          setIconHover("iconColor");
        };
        const handlerIconLeave = () => {
          setIconHover("iconWhite");
        };

        return (
          <div key={item.title}>
            <Modal toggle={isToggleOpen} setToggle={setIsToggleOpen}>

              {/*si toggle esta abierto se renderiza la card*/}

              {isToggleOpen === true && <TechCard infoTech={item} handlerToggle={handlerToggle} />}
              <div
                onClick={handlerToggle}
                onMouseEnter={handlerIconEnter}
                onMouseLeave={handlerIconLeave}
                className="flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out "
              >
                <div>{item[iconHover]}</div>
                <h4
                  className={`${
                    category !== "conceptsMethodologies"
                      ? iconHover === "iconColor"
                        ? "opacity-100"
                        : "opacity-0"
                      : null
                  }`}
                >
                  {item.title}
                </h4>
              </div>
            </Modal>
          </div>
        );
      })}
    </div>
  );
};

export default TechMap;
