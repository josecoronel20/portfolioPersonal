import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Translate from "./Translate";

const Header = () => {
  const logo = "<JC>";

  return (
    <header className=" bg-gradient-to-b from-darkDark from-80% fixed top-0 left-0 w-full z-20">
      <div className="p-3  flex justify-between">
        <Link to="/">
          <div className="inline-block text-green text-xl tracking-widest font-mcLaren py-1 px-5 order-solid border-green border-2 rounded-xl">
            {logo}
          </div>
        </Link>
        <div className="flex gap-2">
          <div className="order-2 md:order-1">
            <Nav />
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
