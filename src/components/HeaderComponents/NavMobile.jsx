import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { iconMenu } from "../../Utilities/Icons";
import { useToggle } from "../../Hooks/useToggle";
import Modal from "../ReutilizableComponents/Modal";
import useLanguage from "../../Hooks/useLanguage";

const Nav = () => {

  //lenguaje
  const { language } = useLanguage();

  // Uso de custom hook para manejar el estado toggle
  const { isToggleOpen, handlerToggle, setIsToggleOpen } = useToggle();

  //extrae el path
  const location = useLocation().pathname;

  //componetiza li
  const Li = ({ to, text }) => {
    return (
      <li className="hover:scale-105 transition-transform ease-in-out duration-200" onClick={handlerToggle}>
        <Link
          className={`${location !== to && "opacity-40"}`}
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
          <Li to={"/"} text={language.nav.home} />
          <Li to={"/projects"} text={language.nav.projects} />
          <Li to={"/blog"} text={language.nav.blog} />
          <Li to={"/contact"} text={language.nav.contact} />
        </ul>
      </nav>
    </Modal>
  );
};

export default Nav;
