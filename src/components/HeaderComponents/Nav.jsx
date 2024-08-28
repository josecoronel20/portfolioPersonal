import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { iconMenu } from "../../utilities/Icons";
import { useToggle } from "../../Hooks/useToggle";
import Modal from "../ReutilizableComponents/Modal";
import useLanguage from "../../Hooks/useLanguage";

const Nav = () => {
  // Estado para obtener el tamaño de la pantalla y renderizar/aplicar estilos dependiendo de este
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  //lenguaje
  const {language} = useLanguage();

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
        <div onClick={handlerToggle} className="relative z-30 cursor-pointer">
          {windowSize < 768 && iconMenu}
        </div>

        <ul
          className={`${
            isToggleOpen === false && "hidden"
          } fixed z-20 bg-darkDark top-0 right-0 h-full w-2/3 flex flex-col justify-center gap-5 text-center text-lightLight `}
        >
          <li onClick={handlerToggle}>
            <Link to="/">{language.nav.home}</Link>
          </li>
          <li onClick={handlerToggle}>
            <Link to="/projects">{language.nav.projects}</Link>
          </li>
          <li onClick={handlerToggle}>
            <Link to="/blog">{language.nav.blog}</Link>
          </li>
          <li onClick={handlerToggle}>
            <Link to="/contact">{language.nav.contact}</Link>
          </li>
        </ul>
      </nav>
    </Modal>
  );
};

export default Nav;
