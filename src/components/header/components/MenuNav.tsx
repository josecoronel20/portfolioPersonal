import React from "react";
import { Link, useLocation } from "react-router-dom";
import { iconMenu } from "../../../utilities/icons/Icons";
import { useToggle } from "../../../Hooks/useToggle";
import Modal from "../../reutilizable/Modal";
import useLanguage from "../../../Hooks/useText";

const NavMobile = () => {

  //texto global
  const { globalText } = useLanguage({typeText: "globalText"});

  // Uso de custom hook para manejar el estado toggle
  const { isToggleOpen, handlerToggle, setIsToggleOpen } = useToggle();

  //extrae el path
  const location = useLocation().pathname;

  //componetiza li
  const Li = ({ to, text }) => {
    return (
      <li onClick={handlerToggle}>
        <Link
          className={`${location !== to && " opacity-40 "} hover:scale-105 hover:opacity-100 transition-transform ease-in-out duration-200`}
          to={to}
        >
          {text}
        </Link>
      </li>
    );
  };
  
  return (
    <Modal toggle={isToggleOpen} setToggle={setIsToggleOpen}>
      <nav>
        <div onClick={handlerToggle} className="relative z-30 cursor-pointer">
          {iconMenu}
        </div>

        <ul
          className={`${
            isToggleOpen === false && "hidden"
          } fixed z-20 bg-darkDark top-0 right-0 h-full w-2/3 flex flex-col justify-center gap-5 text-center text-lightLight `}
        >
          <Li to={"/"} text={globalText.nav.home} />
          <Li to={"/projects"} text={globalText.nav.projects} />
          <Li to={"/blog"} text={globalText.nav.blog} />
          <Li to={"/contact"} text={globalText.nav.contact} />
        </ul>
      </nav>
    </Modal>
  );
};

export default NavMobile;
