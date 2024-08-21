import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import es from "../../utilities/lenguajes/es.json";
import { iconMenu } from "../../utilities/Icons";
import { useToggle } from "../customHooks/useToggle";
import Modal from "./Modal";

const Nav = () => {
  // Estado para obtener el tamaño de la pantalla y renderizar/aplicar estilos dependiendo de este
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // Uso de custom hook para manejar el estado toggle
  const { isToggleOpen, handlerToggle, setIsToggleOpen } = useToggle();

  // Lógica para manejar el tamaño de pantalla
  const handlerWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  // Efecto para manejar cambios de tamaño de pantalla y clics fuera del nav
  useEffect(() => {
    window.addEventListener("resize", handlerWindowSize);

    return () => {
      window.removeEventListener("resize", handlerWindowSize);
    };
  }, [isToggleOpen, handlerToggle]);

  return (
    <Modal toggle={isToggleOpen} setToggle={setIsToggleOpen}>
      <nav>
        <div onClick={handlerToggle} className="relative z-30">
          {windowSize < 768 && iconMenu}
        </div>

        <ul
          className={`${
            isToggleOpen === false && "hidden"
          } fixed z-20 bg-darkLight top-0 right-0 h-full w-2/3 flex flex-col justify-center gap-5 text-center text-lightLight`}
        >
          <li>
            <Link to="/">{es.nav.home}</Link>
          </li>
          <li>
            <Link to="/projects">{es.nav.projects}</Link>
          </li>
          <li>
            <Link to="/blog">{es.nav.blog}</Link>
          </li>
          <li>
            <Link to="/contact">{es.nav.contact}</Link>
          </li>
        </ul>
      </nav>
    </Modal>
  );
};

export default Nav;
