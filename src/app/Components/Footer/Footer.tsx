"use client";

import React, { ReactNode } from "react";
import ContactContent from "@/app/Components/ContactContent";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguageStore } from "@/app/lib/store/useLanguageStore";

//Componente Footer que renderiza el pie de página.
const Footer = ():JSX.Element => {
  //extrae el path del url
  const actualPath = usePathname();

  //importa el idioma del store
  const {textLanguage} = useLanguageStore();

  //componetizacion de li
  const ListItem = ({ to, children }:{to:string,children:ReactNode}):JSX.Element => (
    <li className="text-sm opacity-50 hover:opacity-100 hover:scale-105 ease-in-out transition-transform duration-200">
      <Link href={to}>{children}</Link>
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
            <ListItem to={"/Projects"}>{textLanguage.header.nav.li.projects}</ListItem>
            <ListItem to={"/Blog"}>{textLanguage.header.nav.li.blog}</ListItem>
            <ListItem to={"/ContactMe"}>{textLanguage.header.nav.li.contactMe}</ListItem>
          </ul>
        </div></div>
    </section>
  );
};

export default Footer;
