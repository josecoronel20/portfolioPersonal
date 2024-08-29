import React from "react";
import { Link } from "react-router-dom";
import useLanguage from "../../Hooks/useLanguage";
import { useLocation } from "react-router-dom";

const NavFullScreen = () => {
    //accede al lenguaje global
  const { globalText } = useLanguage({typeText:"globalText"});

  //extrae el path
  const location = useLocation().pathname;

  //componetiza li
  const Li = ({ to, text }) => {
    return (
      <li>
        <Link className={`${location !== to && "opacity-40"} hover:opacity-100 hover:scale-105 transition-transform ease-in-out duration-200`} to={to}>{text}</Link>
      </li>
    );
  };

  return (
    <nav>
      <ul className="flex gap-10">
        <Li to={"/"} text={globalText.nav.home} />
        <Li to={"/projects"} text={globalText.nav.projects} />
        <Li to={"/blog"} text={globalText.nav.blog} />
        <Li to={"/contact"} text={globalText.nav.contact} />
      </ul>
    </nav>
  );
};

export default NavFullScreen;
