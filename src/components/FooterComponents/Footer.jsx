import React from "react";
import ContactContent from "../HeaderComponents/ContactComponents/ContactContent";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useLanguage from "../../Hooks/useLanguage";

const Footer = () => {
  const actualPath = useLocation().pathname;
  const { language } = useLanguage();

  const ListItem = ({ to, children }) => (
    <li className="text-sm opacity-50 hover:opacity-100 hover:scale-105 ease-in-out transition-transform duration-200">
      <Link to={to}>{children}</Link>
    </li>
  );

  return (
    <section className="bg-darkFooter px-2 py-10 flex justify-center">
      <div className="flex flex-col gap-10">
      {actualPath.includes("contact") === false && <ContactContent />}

      <div className="flex flex-col gap-5">
        <h3>Navegación rápida</h3>
        <ul className="flex flex-col gap-1">
          <ListItem to={"/"}>{language.nav.home}</ListItem>
          <ListItem to={"/projects"}>{language.nav.projects}</ListItem>
          <ListItem to={"/blog"}>{language.nav.blog}</ListItem>
          <ListItem to={"/contact"}>{language.nav.contact}</ListItem>
        </ul>
      </div></div>
    </section>
  );
};

export default Footer;