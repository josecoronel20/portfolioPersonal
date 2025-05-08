import React, { ReactNode } from "react";
import ContactContent from "../ReutilizableComponents/ContactContent.js";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.js";

const Footer = ():JSX.Element => {
  //extrae el path del url
  const actualPath = useLocation().pathname;

  //hook que importa el texto segun idioma
  const {textLanguage} = useLanguage()

  //componetizacion de li
  const ListItem = ({ to, children }:{to:string,children:ReactNode}):JSX.Element => (
    <li className="text-sm opacity-50 hover:opacity-100 hover:scale-105 ease-in-out transition-transform duration-200">
      <Link to={to}>{children}</Link>
    </li>
  );

  return (
    <section className="bg-darkFooter px-2 py-10 flex justify-center">
      <div className="flex flex-wrap gap-10 w-full justify-around">
      {actualPath.includes("contact") === false && <ContactContent />}

      <div className="flex flex-col gap-5">
        <h3>{textLanguage.footer.title}</h3>
        <ul className="flex flex-col gap-1">
          <ListItem to={"/"}>{textLanguage.header.nav.li.home}</ListItem>
          <ListItem to={"/projects"}>{textLanguage.header.nav.li.projects}</ListItem>
          <ListItem to={"/blog"}>{textLanguage.header.nav.li.blog}</ListItem>
          <ListItem to={"/contact"}>{textLanguage.header.nav.li.contactMe}</ListItem>
        </ul>
      </div></div>
    </section>
  );
};

export default Footer;
