"use client";

import React from "react";
import Link from "next/link";
import Translate from "@/components/layout/Header/components/Translator";
import { MenuNav } from "@/components/layout/Header/components/MenuNav";
import { useLanguageStore } from "@/store/useLanguageStore";

//Componente Header que renderiza la barra de navegación superior.
const Header = (): JSX.Element => {
  const { textLanguage } = useLanguageStore();

  return (
    <header className=" fixed top-0 left-0 w-full z-20 bg-gradient-to-b from-slate-950 via-slate-950/60 to-slate-950/0">
      <div className="p-3 flex justify-between">
        <Link href="/">
          <div className="inline-block text-cyan-400 text-xl tracking-widest font-mcLaren py-1 px-5 order-solid border-cyan-400 border-2 rounded-xl">
            {textLanguage.header.logo}
          </div>
        </Link>
        <div className="flex gap-2 md:gap-16">
          <div className="order-2 md:order-1">
            <MenuNav />
          </div>
          <div className="order-1 md:order-2">
            <Translate />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
