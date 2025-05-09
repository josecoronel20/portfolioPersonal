import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { iconMenu } from "../../utilities/Icons";
import { useToggle } from "../../hooks/useToggle";
import Modal from "../ReutilizableComponents/Modal";
import { useLanguageStore } from "../../store/useLanguageStore";

const MenuNav = ():JSX.Element => {
  // Estado para obtener el tamaño de la pantalla y renderizar/aplicar estilos dependiendo de este
  const [windowSize, setWindowSize] = useState(window.innerWidth);

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
  }, []);

  //importa el idioma del store
  const { textLanguage } = useLanguageStore();

  // Uso de custom hook para manejar el estado toggle
  const { isToggleOpen, handlerToggle, setIsToggleOpen } = useToggle();

  //extrae el path
  const location = useLocation().pathname;

  //componetiza li
  const Li = ({ to, text }: { to: string; text: string }) => {
    return (
      <li onClick={windowSize < 768 ? handlerToggle : undefined}>
        <Link
          className={`${
            location !== to && " opacity-40 "
          } hover:scale-105 hover:opacity-100 transition-transform ease-in-out duration-200`}
          to={to}
        >
          {text}
        </Link>
      </li>
    );
  };

  return (
    <nav>
      {windowSize < 768 ? (
        <div onClick={handlerToggle} className="relative z-30 cursor-pointer">
          {iconMenu}
        </div>
      ) : (
        ""
      )}

      <Modal toggle={isToggleOpen} setToggle={setIsToggleOpen} nav={true}>
        <ul
          className={`${windowSize < 768 && isToggleOpen === false && "hidden"} 
         
         ${
           windowSize < 768
             ? "fixed z-20 bg-darkDark top-0 right-0 h-full w-2/3  flex-col"
             : ""
         } justify-center gap-5 text-center text-lightLight flex`}
        >
          <Li to={"/"} text={textLanguage.header.nav.li.home} />
          <Li to={"/projects"} text={textLanguage.header.nav.li.projects} />
          <Li to={"/blog"} text={textLanguage.header.nav.li.blog} />
          <Li to={"/contact"} text={textLanguage.header.nav.li.contactMe} />
        </ul>
      </Modal>
    </nav>
  );
};

export default MenuNav;
