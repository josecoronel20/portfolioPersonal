import React from "react";
import { Link } from "react-router-dom";
import useLanguage from "../../Hooks/useLanguage";
import { useLocation } from "react-router-dom";

const NavFullScreen = () => {
    //accede al lenguaje global
  const { language } = useLanguage();

  //extrae el path
  const location = useLocation().pathname;

  //componetiza li
  const Li = ({ to, text }) => {
    return (
      <li className="hover:scale-105 transition-transform ease-in-out duration-200">
        <Link className={`${location !== to && "opacity-40"} hover:opacity-100`} to={to}>{text}</Link>
      </li>
    );
  };

  return (
    <nav>
      <ul className="flex gap-10">
        <Li to={"/"} text={language.nav.home} />
        <Li to={"/projects"} text={language.nav.projects} />
        <Li to={"/blog"} text={language.nav.blog} />
        <Li to={"/contact"} text={language.nav.contact} />
      </ul>
    </nav>
  );
};

export default NavFullScreen;
