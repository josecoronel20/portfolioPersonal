"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Translate from "@/app/Components/Header/components/Translator";
import { MenuNav } from "@/app/Components/Header/components/MenuNav";
import { useLanguageStore } from "@/app/lib/store/useLanguageStore";

//Componente Header que renderiza la barra de navegación superior.
const Header = (): JSX.Element => {
  const { textLanguage } = useLanguageStore();
  const location = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <header className="bg-gradient-to-b from-darkDark from-80% fixed top-0 left-0 w-full z-20">
      <div className="p-3 flex justify-between">
        <Link href="/">
          <div className="inline-block text-green text-xl tracking-widest font-mcLaren py-1 px-5 order-solid border-green border-2 rounded-xl">
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
