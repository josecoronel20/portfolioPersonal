import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import es from "../../utilities/lenguajes/es.json";
import { iconMenu } from "../../utilities/Icons";
import { useToggle } from "../customHooks/useToggle";

const Nav = () => {
  //estado para obtener el tamaño de la screen y renderizar y aplicar estilos dependiendo de este
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  //uso de custom hook para manejar el estado toggle
  const { isToggleOpen, handlerToggle } = useToggle();

  //logica de el tamanio de screen
  const handlerWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  //efect para leer la medida y actualizar el estado de windowSize
  useEffect(() => {
    window.addEventListener("resize", handlerWindowSize);

    return () => {
      window.removeEventListener("resize", handlerWindowSize);
    };
  }, []);

  return (
    <nav>
      <div onClick={handlerToggle} className="fixed z-10">
        {windowSize < 768 && iconMenu}
      </div>

        <ul
          className={`${
            isToggleOpen === false && "hidden"
          } fixed  bg-darkLight top-0 right-0 h-full w-2/3 flex flex-col justify-center   gap-5 text-center text-lightLight`}
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
  );
};

export default Nav;
