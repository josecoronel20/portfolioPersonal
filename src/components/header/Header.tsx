import React, {  useEffect } from "react";
import {  useLocation } from "react-router-dom";
import MenuNav from "./components/MenuNav"
import Translate from "./components/Translator";
import Logo from "./components/Logo";

const Header = () => {
  //logica para ir a la parte superior cada vez que se cambia de location
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    //logica de redireccionamiento
  }, [location]);

  return (
    <header className=" bg-gradient-to-b from-darkDark from-80% fixed top-0 left-0 w-full z-20">
      <div className="p-3  flex justify-between">
        <Logo />
        <div className="flex gap-2 md:gap-16">
          <div className="order-2 md:order-1">
            <MenuNav />{" "}
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
