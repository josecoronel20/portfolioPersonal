import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import NavMobile from "../HeaderComponents/NavMobile"
import Translate from "./Translate";
import NavFullScreen from "./NavFullScreen";

const Header = () => {
  const logo = "<JC>";

    // Estado para obtener el tamaño de la pantalla y renderizar/aplicar estilos dependiendo de este
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // Lógica para manejar el tamaño de pantalla
  const handlerWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  // Efecto para manejar cambios de tamaño de pantalla y clics fuera del nav
  useEffect(() => {
    window.addEventListener("resize", handlerWindowSize);

    return () => {
      window.removeEventListener("resize", handlerWindowSize);
    };
  }, []);

  //logica para ir a la parte superior cada vez que se cambia de location
 const location = useLocation()

 useEffect(() => {
  window.scrollTo(0, 0);

  //logica de redireccionamiento
 }, [location])

  return (
    <header className=" bg-gradient-to-b from-darkDark from-80% fixed top-0 left-0 w-full z-20">
      <div className="p-3  flex justify-between">
        <Link to="/">
          <div className="inline-block text-green text-xl tracking-widest font-mcLaren py-1 px-5 order-solid border-green border-2 rounded-xl">
            {logo}
          </div>
        </Link>
        <div className="flex gap-2 md:gap-16">
          <div className="order-2 md:order-1">
            {windowSize < 768 ? <NavMobile /> : <NavFullScreen />}
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
