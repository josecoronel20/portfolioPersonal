import React from "react";
import useLanguage from "../../Hooks/useLanguage";
import illustration from "../../../public/img/illustration.png";
import { Link } from "react-router-dom";
import {
  styleButtonPrincipal,
  styleContainerTop,
} from "../../Utilities/customStyles";

const Hero = () => {
  //custom hook de lengiuaje para importar el json con textos en es o en
  const { globalText } = useLanguage({ typeText: "globalText" });

  return (
    <section className={styleContainerTop}>
      <div className="flex flex-col md:flex-row md:gap-5 justify-center w-full h-full items-center text-center pt-5">
        <div className="order-2 md:order-1 flex flex-col gap-4 max-w-xs">
          <h1 className="text-3xl">
            {globalText.home.hero.title}
            <span className="text-green">Jose Maria Coronel</span>
          </h1>
          <h3 className="text-2xl font-light">
            {globalText.home.hero.subtitle}
            <span className="text-green">React</span>
          </h3>

          <Link className={styleButtonPrincipal} to="/projects">
            {globalText.home.hero.button}
          </Link>
          
        </div>
        <div className="order-1 md:order-2 w-5/6 custom-shadow max-w-xs md:max-w-md">
          <img src={illustration} alt={globalText.home.hero.altImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
