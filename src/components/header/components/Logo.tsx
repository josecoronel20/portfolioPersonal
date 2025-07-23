import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const logo = "<JC>";

  return (
    <Link to="/">
      <div className="inline-block text-green text-xl tracking-widest font-mcLaren py-1 px-5 order-solid border-green border-2 rounded-xl">
        {logo}
      </div>
    </Link>
  );
};

export default Logo;
