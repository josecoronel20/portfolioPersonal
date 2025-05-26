"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Translate from "./Translator";
import MenuNav from "./MenuNav";
import { useLanguageStore } from "@/app/lib/store/useLanguageStore";

const Header = ():JSX.Element => {
  //importa el idioma del store
  const {textLanguage} = useLanguageStore()
  //logica para ir a la parte superior cada vez que se cambia de location
  const location = usePathname()

  //scrollea hacia arriba de todo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className=" bg-gradient-to-b from-darkDark from-80% fixed top-0 left-0 w-full z-20">
      <div className="p-3  flex justify-between">
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
