"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { useToggle } from "@/hooks/useToggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

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

  const navItems = [
    { to: "/", text: textLanguage.header.nav.li.home },
    { to: "/Projects", text: textLanguage.header.nav.li.projects },
    { to: "/Blog", text: textLanguage.header.nav.li.blog },
    { to: "/ContactMe", text: textLanguage.header.nav.li.contactMe },
  ];

  const NavItem = ({ to, text }: { to: string; text: string }): JSX.Element => {
    return (
      <li onClick={windowSize < 768 ? handlerToggle : undefined}>
        <Link
          href={to}
          className={`${
            pathname === to ? "text-primary" : "text-white"
          } hover:text-primary transition-colors duration-300`}
        >
          {text}
        </Link>
      </li>
    );
  };

  return (
    <nav className="flex items-center">
      <ul className="gap-5 items-center hidden md:flex">
        {navItems.map(({ to, text }) => (
          <NavItem key={to} to={to} text={text} />
        ))}
      </ul>

      {windowSize < 768 ? (
        <button
          onClick={handlerToggle}
          className="ml-4 text-white hover:text-primary transition-colors duration-300"
        >
          <div className="text-2xl cursor-pointer hover:scale-110 transition-all duration-300 z-30 relative">
            {isToggleOpen ? "✕" : "☰"}
          </div>
        </button>
      ) : null}

      {/* Menu mobile */}
      <div
        className={`${
          windowSize < 768 && isToggleOpen === false && "hidden"
        } fixed top-0 left-0 w-full h-screen bg-gradient-to-bl from-slate-900 to-cyan-950 p-4 ${
          windowSize < 768 ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 h-full justify-center items-center">
          {navItems.map(({ to, text }) => (
            <NavItem key={to} to={to} text={text} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
