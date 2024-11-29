import React from "react";
import ContactContent from "../../components/ReutilizableComponents/ContactContent";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useLanguage from "../../Hooks/useLanguage";
import useQuickTraduction from "../../Hooks/useQuickTraduction";

const Footer = () => {
  const actualPath = useLocation().pathname;
  const { globalText } = useLanguage({typeText:"globalText"});

  //componetizacion de li
  const ListItem = ({ to, children }) => (
    <li className="text-sm opacity-50 hover:opacity-100 hover:scale-105 ease-in-out transition-transform duration-200">
      <Link to={to}>{children}</Link>
    </li>
  );


  const textNavTitle = useQuickTraduction({
    textEs: "Navegación rápida",
    textEn: "Quick navigation",
  });

  return (
    <section className="bg-darkFooter px-2 py-10 flex justify-center">
      <div className="flex flex-wrap gap-10 w-full justify-around">
      {actualPath.includes("contact") === false && <ContactContent />}

      <div className="flex flex-col gap-5">
        <h3>{textNavTitle}</h3>
        <ul className="flex flex-col gap-1">
          <ListItem to={"/"}>{globalText.nav.home}</ListItem>
          <ListItem to={"/projects"}>{globalText.nav.projects}</ListItem>
          <ListItem to={"/blog"}>{globalText.nav.blog}</ListItem>
          <ListItem to={"/contact"}>{globalText.nav.contact}</ListItem>
        </ul>
      </div></div>
    </section>
  );
};

export default Footer;
