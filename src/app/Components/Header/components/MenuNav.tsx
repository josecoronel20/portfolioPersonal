"use client";

import { useLanguageStore } from "@/app/lib/store/useLanguageStore";
import { useToggle } from "@/app/lib/hooks/useToggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useWindowSize = (): number => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    const handlerWindowSize = (): void => {
      setWindowSize(window.innerWidth);
    };

    // Inicializar el tamaño de la ventana
    handlerWindowSize();

    window.addEventListener("resize", handlerWindowSize);

    return () => {
      window.removeEventListener("resize", handlerWindowSize);
    };
  }, []);

  return windowSize;
};

export const MenuNav = (): JSX.Element => {
  const windowSize = useWindowSize();
  const { textLanguage } = useLanguageStore();
  const { isToggleOpen, handlerToggle } = useToggle();
  const pathname = usePathname();

  const NavItem = ({ to, text }: { to: string; text: string }): JSX.Element => (
    <li onClick={windowSize < 768 ? handlerToggle : undefined}>
      <a
        href={to}
        className={`${
          pathname === to ? "text-primary" : "text-white"
        } hover:text-primary transition-colors duration-300`}
      >
        {text}
      </a>
    </li>
  );

  return (
    <nav className="flex items-center">
      <ul className="flex gap-5 items-center">
        <NavItem to="/" text={textLanguage.header.nav.li.home} />
        <NavItem to="/Projects" text={textLanguage.header.nav.li.projects} />
        <NavItem to="/Blog" text={textLanguage.header.nav.li.blog} />
        <NavItem to="/ContactMe" text={textLanguage.header.nav.li.contactMe} />
      </ul>

      {windowSize < 768 ? (
        <button
          onClick={handlerToggle}
          className="ml-4 text-white hover:text-primary transition-colors duration-300"
        >
          {isToggleOpen ? "✕" : "☰"}
        </button>
      ) : null}

      <div
        className={`${
          windowSize < 768 && isToggleOpen === false && "hidden"
        } fixed top-16 left-0 w-full bg-darkDark p-4 ${
          windowSize < 768 ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4">
          <NavItem to="/" text={textLanguage.header.nav.li.home} />
          <NavItem to="/Projects" text={textLanguage.header.nav.li.projects} />
          <NavItem to="/Blog" text={textLanguage.header.nav.li.blog} />
          <NavItem to="/ContactMe" text={textLanguage.header.nav.li.contactMe} />
        </ul>
      </div>
    </nav>
  );
};
